'use strict';

/*
* The idea is to get from development index.html file, production version, where we use uglified version of js & css files
 */

const fs = require('fs');
const path = require('path');
const uglifycss = require('uglifycss');

const helper = {
    guid: ()=>{
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    },

    replaceInFile: (path, str, replace, cb)=>{
        fs.readFile(path, 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            var result = data.replace(str, replace);
            fs.writeFile(path, result, 'utf8', function (err) {
                if(cb){
                    cb();
                }
                if (err) return console.log(err);
            });
        });
    }
}

const uglified = uglifycss.processFiles(
    [
        path.join(__dirname, `../build/css/normalize.css`),
        path.join(__dirname, `../build/css/style.css`),
        path.join(__dirname, `../build/css/fonts.css`),
        path.join(__dirname, `../build/css/global.css`),
        path.join(__dirname, `../build/css/bundle.css`),
    ],
    { maxLineLen: 500, expandVars: true }
);

fs.writeFile(path.join(__dirname, `../static/css/bundle.css`), uglified, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

const _guid = helper.guid();
const jsFile = 'bundle.js';
const newJsFile = `bundle.${_guid}.js`;
const indexFile = path.join(__dirname, "../static/index.html");

fs.rename(path.join(__dirname, `../static/js/${jsFile}`), path.join(__dirname, `../static/js/${newJsFile}`), function(err) {
    if ( err ) console.log('ERROR: ' + err);
});
fs.rename(path.join(__dirname, `../static/js/${jsFile}.gz`), path.join(__dirname, `../static/js/${newJsFile}.gz`), function(err) {
    if ( err ) console.log('ERROR: ' + err);
});

helper.replaceInFile(indexFile, jsFile, newJsFile, ()=>{
    helper.replaceInFile(indexFile, '<link rel="stylesheet" href="/css/normalize.css">', '', ()=>{
        helper.replaceInFile(indexFile, '<link rel="stylesheet" href="/css/style.css">', '', ()=>{
            helper.replaceInFile(indexFile, '<link rel="stylesheet" href="/css/fonts.css">', '', ()=>{
                helper.replaceInFile(indexFile, '<link rel="stylesheet" href="/css/global.css">', '');
            });
        });
    });
});


console.log(`newBundleName: ${newJsFile}`);

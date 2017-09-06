

var fs = require('fs');
var path = require('path');


var uglifycss = require('uglifycss');
const cssFiles = [
    path.join(__dirname, `../build/css/normalize.css`),
    path.join(__dirname, `../build/css/style.css`),
    path.join(__dirname, `../build/css/fonts.css`),
    path.join(__dirname, `../build/css/global.css`),
    path.join(__dirname, `../build/css/bundle.css`),
]

var uglified = uglifycss.processFiles(
    cssFiles,
    { maxLineLen: 500, expandVars: true }
);
fs.writeFile(path.join(__dirname, `../static/css/bundle.css`), uglified, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});


function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function replaceInFile(path, str, replace, cb){
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

const _guid = guid();
const jsFile = 'bundle.js';
const newJsFile = `bundle.${_guid}.js`;
const indexFile = path.join(__dirname, "../static/index.html");
fs.rename(path.join(__dirname, `../static/js/${jsFile}`), path.join(__dirname, `../static/js/${newJsFile}`), function(err) {
    if ( err ) console.log('ERROR: ' + err);
});
fs.rename(path.join(__dirname, `../static/js/${jsFile}.gz`), path.join(__dirname, `../static/js/${newJsFile}.gz`), function(err) {
    if ( err ) console.log('ERROR: ' + err);
});
replaceInFile(indexFile, jsFile, newJsFile, ()=>{
    replaceInFile(indexFile, '<link rel="stylesheet" href="/css/normalize.css">', '', ()=>{
        replaceInFile(indexFile, '<link rel="stylesheet" href="/css/style.css">', '', ()=>{
            replaceInFile(indexFile, '<link rel="stylesheet" href="/css/fonts.css">', '', ()=>{
                replaceInFile(indexFile, '<link rel="stylesheet" href="/css/global.css">', '');
            });
        });
    });
});


console.log(`newBundleName: ${newJsFile}`);

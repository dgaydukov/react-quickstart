'use strict'

/*
* Image bundler uses for image copying from src to build
 */

const path = require('path'),
    fs = require('fs'),
    fse = require('fs-extra'),
    modulesDir = path.join(__dirname, '../../src/modules'),
    buildImgDir = path.join(__dirname, '../../build/img');

const IMG_DIR = "img";

const getSrcImgDirRecursive = (dir, cb) => {
    fs.readdirSync(dir)
        .filter(file => {
            const srcImgDir = path.join(dir, file);
            if(fs.lstatSync(srcImgDir).isDirectory()){
                if(file == IMG_DIR){
                    cb(srcImgDir);
                }
                getSrcImgDirRecursive(srcImgDir, cb);
            }
        });
}

const copyDir = (from, to) => {
    fse.emptyDir(to, (err) => {
        fse.copy(from, to, (err)=>{
            if (err) {
                console.error(err);
            } else {
                console.log("success! " + to);
            }
        });
    })
}

const copySrcToBuild = (dir) => {
    const srcDirName = dir.replace(modulesDir, "").replace(IMG_DIR, "");
    const buildModuleImgDir = path.join(buildImgDir, srcDirName);
    copyDir(dir, buildModuleImgDir);
}

const bundleImage = (dir) => {
    getSrcImgDirRecursive(dir, (srcImgDir)=>{
        copySrcToBuild(srcImgDir);
    });
}

const watchImage = (dir) => {
    getSrcImgDirRecursive(dir, (srcImgDir)=>{
        fs.watch(srcImgDir, (event, filename) => {
            if(event == "rename"){
                console.log("image watch: change detected", filename);
                copySrcToBuild(srcImgDir);
            }
        })
    });
}



module.exports = {
    bundle: () => {
        bundleImage(modulesDir);
    },
    watch: () => {
        bundleImage(modulesDir);
        watchImage(modulesDir);
    },
}




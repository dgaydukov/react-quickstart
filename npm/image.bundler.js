/**
 * Created by diman on 14.05.17.
 */


const path = require('path'),
    fs = require('fs'),
    fse = require('fs-extra'),
    modulesDir = path.join(__dirname, './../src/modules'),
    buildImgDir = path.join(__dirname, './../build/img');

const IMG_DIR = "img";

getSrcImgDirRecursive = (dir, cb) => {
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

copyDir = (from, to) => {
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

copySrcToBuild = (dir) => {
    const srcDirName = dir.replace(modulesDir, "").replace(IMG_DIR, "");
    const buildModuleImgDir = path.join(buildImgDir, srcDirName);
    copyDir(dir, buildModuleImgDir);
}

bundleImage = (dir) => {
    getSrcImgDirRecursive(dir, (srcImgDir)=>{
        copySrcToBuild(srcImgDir);
    });
}

watchImage = (dir) => {
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




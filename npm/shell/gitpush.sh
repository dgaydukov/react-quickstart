#!/bin/sh
npm run build:prod
rm -rf static/js/*
rsync -tr build/* static/
rm -rf static/css/*
node npm/build.prod.js
cd static/
git add .
git commit -m "$1"
git push origin master
echo "Success push to master branch"

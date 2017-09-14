'use strict';

/*
* node.js instance server
 */

const express = require('express'),
    exec = require('child_process').exec,
    webpack = require("webpack"),
    sendevent = require('sendevent'),
    imageBundler = require("./../npm/image.bundler"),
    webpackConfig = require("./../npm/webpack.node.config"),
    path = require('path'),
    app = express(),
    compiler = webpack(webpackConfig),
    events = sendevent('/eventstream'),    
    port = process.env.port || process.env.PORT || 3000,
    host = "127.0.0.1",
    url = `http://${host}:${port}`;

let isFirstStart = true;




//serve gzip encoding header for gzipped files (usually bundle.js.gz)
app.get('*.gz', function(req, res, next) {
    res.set('Content-Encoding', 'gzip');
    next();
});

//use Server-Sent Events with express server
app.use(events);

//serve static (css, js, images)
app.use(express.static(path.join(__dirname, './../build')));

//redirect every request to index.html, so we can use BrowserRouter (instead of HashRouter)
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './../build/index.html'));
});


imageBundler.watch();

compiler.watch({
    aggregateTimeout: 300,
    poll: true,
}, function(err, stats) {
    var jsonStats = stats.toJson();
    if(err){
        console.log("webpack error", err);
    }
    if(jsonStats.errors.length > 0){
        console.log("webpack stats error", jsonStats.errors);
    }
    if(jsonStats.warnings.length > 0){
        console.log("webpack stats warnings", jsonStats.warnings);
    }
    console.log(`${url}, change detected`);
    events.broadcast({reload: true});
    if(isFirstStart){
        console.log(`opening browser ${url}`);
        exec(`x-www-browser ${url}`);
        isFirstStart = false;
    }
});

app.listen(port, host, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log(`Listening ${url}`);
});





'use strict';

/**
 * Node.js instance server
 * app entry point
 */


require('module-alias/register')
const express = require('express'),
    exec = require('child_process').exec,
    webpack = require("webpack"),
    sendevent = require('sendevent'),
    imageBundler = require("@npm/build/image.bundler"),
    webpackConfig = require("@npm/webpack/node.config"),
    {join} = require('path'),
    app = express(),
    compiler = webpack(webpackConfig),
    events = sendevent('/eventstream'),    
    port = process.env.APP_PORT,
    url = `http://127.0.0.1:${port}`;

let isFirstStart = true;



// serve gzip encoding header for gzipped files (usually bundle.js.gz)
app.get('*.gz', (req, res, next)=>{
    res.set('Content-Encoding', 'gzip');
    next();
});

//use Server-Sent Events with express server
app.use(events);

// serve static (css, js, images)
app.use(express.static(join(__dirname, './../build')));

// redirect every request to index.html, so we can use BrowserRouter (instead of HashRouter)
app.get('*', (req, res)=>{
    res.sendFile(join(__dirname, './../build/index.html'));
});


imageBundler.watch();


console.log("opening browser...")
compiler.watch({
    aggregateTimeout: 300,
    poll: true,
}, (err, stats)=>{
    const stat = stats.toJson();
    if(err){
        console.log("webpack error", err)
    }
    if(stat.errors.length > 0){
        console.log(`webpack stats error: ${stat.errors.length}`)
        stat.errors.map(err=>{
            console.log(err)
        })
    }
    if(stat.warnings.length > 0){
        console.log(`webpack stats warnings: ${stat.warnings.length}`)
        stat.warnings.map(err=>{
            console.log(err)
        })
    }
    console.log(`change detected: ${url}`);
    events.broadcast({reload: true});
    if(isFirstStart){
        console.log(`go to ${url}`)
        exec(`x-www-browser ${url}`)
        isFirstStart = false;
    }
});

app.listen(port, (err)=>{
    if (err) {
        return console.error(err);
    }
    console.log(`Listening ${url}`);
});
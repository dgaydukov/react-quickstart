### Code Splitting

There are 2 concepts on code splitting
* Split code in app.js & vendor.js
* Split code based on url

The first is pretty straightforward. You just move out all libraries into different file (for example vendor.js) and thus you get 2 files instead of one.
Webpack allow it by simply put 2 entry points. You can checkout it by looking at [webpack.base.config.js](https://github.com/dgaydukov/react-quickstart/blob/master/npm/webpack.base.config.js).
The second approach is a bit tricky. Fortunately webpack also provide us with this ability out of the box.
The point is that webpack whenever it sees ```System.import```, it starts to load code into chunk. And when we go to the url, webpack request this chunk.
You can check out [async-component](https://github.com/dgaydukov/react-quickstart/blob/master/src/async-component.js).
In order to use Async version, just comment layout import and use AsyncLayout instead


### How React Handle code-splitting

The magic is here
```javascript
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.charset = 'utf-8';
script.async = true;
script.timeout = 120000;
if (__webpack_require__.nc) {
    script.setAttribute("nonce", __webpack_require__.nc);
}
script.src = __webpack_require__.p + "js/react/" + chunkId + "." + {
    "2": "4b578c06079938850b7b",
    "3": "742508d606b5509c8e18",
    "4": "20c8fe7c0346fe23c0a8"
}[chunkId] + ".js";
var timeout = setTimeout(onScriptComplete, 120000);
script.onerror = script.onload = onScriptComplete;

function onScriptComplete() {
    script.onerror = script.onload = null;
    clearTimeout(timeout);
    var chunk = installedChunks[chunkId];
    if (chunk !== 0) {
        if (chunk) {
            chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
        }
        installedChunks[chunkId] = undefined;
    }
};
```
As we see react watch for router change, then if file not loaded upload it
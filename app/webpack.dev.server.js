

__webpack_public_path__ = "http://127.0.0.1:3102/";

const webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackDevServerConfig = require("./../npm/webpack.dev.server.config"),
    compiler = webpack(webpackDevServerConfig);
    host = "localhost",
    port = 3102;



new WebpackDevServer(compiler, webpackDevServerConfig.devServer)
    .listen(port, host, function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log(`Listening at http://${host}:${port}`);
});
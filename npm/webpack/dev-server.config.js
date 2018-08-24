const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require("./base.config.js");
const port = process.env.PORT;
const buildDir = resolve(__dirname, '../../webpack-build');

const config = {
    target: "web",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../../build/webpack-index.html')
        })
    ],
    devServer: {
        hot: true,
        contentBase: buildDir,
        publicPath: '/',
        stats: 'errors-only',
        port: port,
        compress: true,
        historyApiFallback: true,
        host: '127.0.0.1',
        disableHostCheck: true
    }
};

module.exports = merge(baseConfig, config);
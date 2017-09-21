const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require("./webpack.base.config.js");
const port = process.env.port || process.env.PORT || 3000;
const buildDir = resolve(__dirname, '../webpack-build');

const config = {
    entry: {
        app: [resolve(__dirname, '../src/app.js')],
        hrm: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://127.0.0.1:${port}`,
            'webpack/hot/only-dev-server'
        ]
    },
    output: {
        path: buildDir,
        filename: 'js/[name].js',
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../build/webpack-index.html')
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
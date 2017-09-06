const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require("./webpack.base.config.js");
const port = process.env.port || process.env.PORT || 3000;

const config = {
    entry: {
        app: [path.join(__dirname, '../src/webpack-app.js')],
        hrm: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://127.0.0.1:${port}`,
            'webpack/hot/only-dev-server'
        ]
    },
    output: {
        path: path.join(__dirname, "./../build2"),
        filename: 'js/[name].js',
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../build/webpack-index.html')
        })
    ],
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, '../build2'),
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
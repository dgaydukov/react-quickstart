const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const port = process.env.port || process.env.PORT || 3000;

module.exports = {
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
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: path.join(__dirname, './../src'),
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [require('babel-plugin-transform-function-bind')]
                }
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:10]")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/bundle.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../build/webpack-index.html')
        })
    ],
    externals: {
        'site-config': JSON.stringify(require('./site-config.json'))
    },
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
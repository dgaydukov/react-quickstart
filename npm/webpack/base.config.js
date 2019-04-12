const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs')

module.exports = {
    mode: "development",
    resolve: {
        alias: {
            '@root': resolve(__dirname, '../../src'),
            '@redux': resolve(__dirname, '../../src/redux'),
            '@modules': resolve(__dirname, '../../src/modules'),
            '@api': resolve(__dirname, '../../src/api'),
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    entry: {
        app: [resolve(__dirname, '../../src') + '/app.tsx'],
        vendor: [
            'babel-polyfill',
            'react',
            'react-router-dom',
            'react-redux',
            'redux-thunk'
        ]
    },
    output: {
        path: resolve(__dirname, '../../build'),
        filename: 'js/react/[name].js',
        publicPath: '/',
        chunkFilename: 'js/react/[id].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: resolve(__dirname, '../../src'),
                loader: "ts-loader",
                // query: {
                //     presets: ['es2015', 'react'],
                //     plugins: [
                //         "babel-plugin-transform-function-bind",
                //         "babel-plugin-transform-object-rest-spread",
                //         "transform-async-to-generator",
                //     ]
                // }
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:10]")
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("../../build/css/bundle.css"),
    ],
};
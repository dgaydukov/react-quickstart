const {resolve} = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require("./base.config.js");

const config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                include: resolve(__dirname, './../../src'),
                loader: "eslint-loader",
                query: {
                    configFile: resolve(__dirname, "./../../npm/.eslintrc.json"),
                },
            },
        ]
    },
    plugins: [      
        new webpack.DefinePlugin({
            'process.env.WEB_SERVER': '"NODE"'
        })
    ]
};

module.exports = merge(baseConfig, config);
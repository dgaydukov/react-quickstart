const {resolve} = require('path');
const merge = require('webpack-merge');
const baseConfig = require("./webpack.base.config.js");

const config = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: resolve(__dirname, './../src'),
                loader: "eslint-loader",
                query: {
                    configFile: resolve(__dirname, "./../npm/.eslintrc.json"),
                },
            },
        ]
    },
};

module.exports = merge(baseConfig, config);
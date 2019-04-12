const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const merge = require('webpack-merge');
const baseConfig = require("./base.config.js");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    mode: "production",
    resolve: {
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat",
            "create-react-class": "preact-compat/lib/create-react-class",
        },
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new BundleAnalyzerPlugin(),
    ],
};


module.exports = merge(baseConfig, config);
const merge = require('webpack-merge');
const baseConfig = require("./webpack.base.config.js");

const config = {};

module.exports = merge(baseConfig, config);
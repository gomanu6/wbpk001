const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');



module.exports = merge(common, {

mode: "production",
devtool: false,


output: {
    filename: "assets/js/[name].[contenthash].js"
}


})
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');




module.exports = merge(common, {

    mode: "development",
    devtool: 'source-map',

    

    
    output: {
        
        filename: "assets/js/[name].js"
    },

    optimization: {
        minimize: true,
    }




})
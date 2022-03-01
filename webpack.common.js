const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config({path: './.env'});
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {


    devServer: {
        static: path.resolve( __dirname, 'public'),
        hot: true,
        port: 3030,
    },

    entry: {
        main: './src/assets/js/index.js',
        second: './src/assets/js/second.js',
        
    },

    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new CssMinimizerPlugin,

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
            title: "Webpack Home",
            filename: 'index.html',
            chunks: ['main'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
            title: "Testing Webpack",
            filename: 'index2.html',
            minify: false,
            chunks: ['second']
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        }),

        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
            chunkFilename: 'assets/css/[id].[contenthash].css',
            
        }),

    ],

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [ MiniCssExtractPlugin.loader,
                     'css-loader',
                     'sass-loader',
                     'postcss-loader']
            },

            {
              test: /\.js$/i,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }  
            },

            {
                test: /\.(png|svg|gif|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'assets/images',
                        esModule: false,
                    }
                }
            },

            
        ]

    },

}
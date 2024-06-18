const path = require('path');
const webpack = require('webpack');
const json = require('./package.json');
module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}
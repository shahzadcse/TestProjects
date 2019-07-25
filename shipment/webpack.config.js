const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: ['whatwg-fetch', './index.js'],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'./main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL)
        })
    ]
}
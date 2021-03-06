const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
    mode: 'development',
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
               
               loader: 'babel-loader'
              
            },
            {
                test: /\.css/,
                loader:['style-loader','css-loader','postcss-loader']
            }

        ]
    },
    devServer: {
        historyApiFallback : true,
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
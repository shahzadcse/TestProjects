const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output:{
        path: __dirname,
        filename:'./dist/main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader'
            }
        ]
    }
}
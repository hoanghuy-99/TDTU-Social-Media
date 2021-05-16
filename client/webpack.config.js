const path = require('path');
const webpack = require('webpack');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public/javascripts'),
        filename: 'main.js',
    },
    module:{
        rules: [
            {
            test: /\.m?js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ ["@babel/preset-env", { "targets": "> 0.25%, not dead" }],'@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
            }
        ]
    }
    ,
    plugins: [
        new MergeIntoSingleFilePlugin({
            files: {
                "../stylesheets/style.css": ['./src/css/*.css']
            }
        }),
        new webpack.DefinePlugin({
            "env": {
                NODE_ENV:JSON.stringify(process.env.NODE_ENV || 'local')
            }
        })
        
    ]
};
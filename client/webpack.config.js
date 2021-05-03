const path = require('path');
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
                    presets: ['@babel/preset-env','@babel/preset-react']
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
    ]
};
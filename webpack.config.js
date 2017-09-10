const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR  = path.join(__dirname, 'app/build');
const CLIENT_DIR = path.join(__dirname, 'app/src');

module.exports = {
    context: CLIENT_DIR,

    entry: {
        index: [
            './index',
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000'
        ],
        style: './style.sass'
    },

    output: {
        path:     BUILD_DIR,
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3000
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Homework 1',
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ]
};
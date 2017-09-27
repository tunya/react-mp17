const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'app/build');
const SOURCE_DIR = path.join(__dirname, 'app/src');

module.exports = {
  context: SOURCE_DIR,

  entry: './index',

  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        }, {
          loader: 'sass-loader',
        }],
      }),
    }, {
      test: /\.json$/,
      use: {
        loader: 'json-loader',
      },
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    }],
  },

  plugins: [
    new ClearWebpackPlugin([BUILD_DIR], { verbose: true }),
    new HtmlWebpackPlugin({
      title: 'Netflixroulette',
      hash: true,
      template: './index.html',
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
  ],
};

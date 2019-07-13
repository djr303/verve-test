const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const app = path.resolve(__dirname, 'src');
const babelrc = path.resolve(__dirname, '.babelrc');

module.exports = {
  entry: path.resolve(app, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'app.bundle.js',
  },
  module: {
      rules: [
          {
              test: /\.js[x]?$/,
              include: [app],
              use: [{
                  loader: 'babel-loader',
                  options: {
                      cacheDirectory: true,
                      extends: babelrc,
                  },
              }],
          },
          {
              test: /\.scss$/,
              include: [app],
              exclude: /node_modules/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                      'css-loader',
                      'sass-loader',
                  ],
              }),
          },
      ]
  },
  devtool: 'source-map',
  plugins: [
      new ExtractTextPlugin('app.bundle.css'),
  ],
};

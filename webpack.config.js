const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: ['./src/index.jsx', './src/styles/scss/main.scss'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: ['public/assests/styles/scss'],
        },
      },
    }),
    new ExtractTextPlugin({ filename: '[name].bundle.css', allChunks: true }),
  ],
};

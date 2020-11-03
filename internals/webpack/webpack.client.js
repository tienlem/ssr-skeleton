const path = require('path');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'development',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          to: path.resolve(process.cwd(), 'public'),
          from: path.resolve(process.cwd(), 'manifest'),
        },
      ],
    }),
  ],
  // Tell webpack to root file of our server app
  entry: path.resolve(process.cwd(), 'src/index.jsx'),

  // Tell webpack where to put output file
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'public'),
  },
  devtool: 'inline-source-map',
  target: 'web',
};

module.exports = merge(baseConfig, config);

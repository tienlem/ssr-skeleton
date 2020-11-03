const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const baseConfig = require('./webpack.base');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  mode: 'production',
  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: false,
      }),
    ],
  },
  // Tell webpack to root file of our server app
  entry: path.resolve(process.cwd(), 'src/index.jsx'),

  // Tell webpack where to put output file
  output: {
    filename: '[name]-bundle-[chunkhash:8].js',
    path: path.resolve(process.cwd(), 'public'),
  },
  devtool: 'inline-source-map',
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          to: path.resolve(process.cwd(), 'public'),
          from: path.resolve(process.cwd(), 'manifest'),
        },
      ],
    }),
  ],
  target: 'web',
};

module.exports = merge(baseConfig, config);

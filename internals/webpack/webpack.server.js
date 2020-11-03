const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  mode: 'production',

  // Tell webpack the root file of our
  // server application
  entry: path.resolve(process.cwd(), 'server/index.js'),
  // We don't serve bundle.js for server, so we can use dynamic external imports
  externals: ['@loadable/component', webpackNodeExternals()],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'build'),
    libraryTarget: 'commonjs2',
  },
};

module.exports = merge(baseConfig, config);

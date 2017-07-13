'use strict'
const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = Object.assign({}, baseConfig, {
  cache: true,
  watch: true,
  profile: true,
  plugins: baseConfig.plugins.concat([
    new ProgressBarPlugin({ format: ' webpack 构建中 [:bar] :percent :msg' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]),
});
module.exports = config;
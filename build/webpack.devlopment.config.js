'use strict'
const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


const config = Object.assign({}, baseConfig, {
  debug: true,
  cache: true,
  watch: true,
  profile: true,
  plugins: baseConfig.concat([
    new ProgressBarPlugin({ format: ' webpack 构建中 [:bar] :percent :msg' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
  ]),
  
})
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

const proConfig = object.assgin({}, baseConfig, {
  plugins: baseConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      },
    }),
  ]),
});

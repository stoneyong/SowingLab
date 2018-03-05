if (!process.env.NODE_EVN) {
  process.env.NODE_EVN = 'development';
}
const webpack = require('webpack');
const path = require('path');
const devServer = require('webpack-dev-server');
const configDev = require('./webpack.devlopment.config');

// 添加 HRM 相关的 plugins
configDev.plugins.push(...[
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
]);

const options = {
  publicPath: configDev.output.publicPath,
  contentBase: path.join(__dirname, 'dist/'),
  hot: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  },
  host: 'localhost',
  port: '10001'
}

devServer.addDevServerEntrypoints(configDev, options);
configDev.entry.app.unshift('webpack-dev-server/client?http://localhost:10001/');
const compiler = webpack(configDev);

const server = new devServer(compiler, options);

server.listen(10001, '127.0.0.1', function() {
  console.log('Starting server on http://localhost:10001');
});

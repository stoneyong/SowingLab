if (!process.env.NODE_EVN) {
    process.env.NODE_EVN = 'development';
}
const webpack = require('webpack');
const path = require('path');
const devServer = require('webpack-dev-server');
const configDev = require('./webpack.devlopment.config');

const compiler = webpack(configDev);

const server = new devServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.client(),
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
        chunks : false,
        chunkModules : false,
        colors : true
    }
});

server.listen(10001, "127.0.0.1", function() {
	console.log("Starting server on http://localhost:10001");
});


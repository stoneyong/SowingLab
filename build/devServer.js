if (!process.env.NODE_EVN) {
    process.env.NODE_EVN = 'development';
}
const webpack = require('webpack');
const path = require('path');
const devServer = require('webpack-dev-server');
const configDev = require('./webpack.devlopment.config');

configDev.entry.app.unshift('webpack-dev-server/client?http://localhost:10001/');
const compiler = webpack(configDev);
console.log('path==', configDev);
const server = new devServer(compiler, {
    publicPath: configDev.output.publicPath,
    // contentBase: path.join(__dirname, '../dist'),
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


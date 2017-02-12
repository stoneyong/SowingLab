'use strict'
const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin =require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
//自动引入静态资源到html 页面
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development' || 'production';

let plugins = [
    new ProgressBarPlugin({ format: ' webpack 构建中 [:bar] :percent :msg' }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),

    new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: __dirname + '/src/index.html'
    })
]

if (process.env.NODE_ENV != 'production') {
     plugins = plugins.concat([
        // Enable multi-pass compilation for enhanced performance
        // in larger projects. Good default.
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new OpenBrowserPlugin({ url: 'localhost:8080/dist/index.html' })
     ])
}
const config ={
    entry: {
        'index': './src/index.js',
    },
    output: {
        path: './dist',
        filename: '[name].js',
    },
    resolve: {
        alias: {

        },
        modulesDirectories: [
            '',
            'node_modules',
            'src/components',
            'components'
        ],
        extensions: ['', '.js', '.jsx', '.jsx.js', '.css']
    },
    module: {
        loaders: [
            
            {
                test: /\.html$/,
                loader: "html"
                // loader: "html?-minimize"
            },

            /*
            * img loader
            * */
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'url-loader',
                query: {
                    /*
                    *  limit=10000 ： 10kb
                    *  图片大小小于10kb 采用内联的形式，否则输出图片
                    * */
                    limit: 10000,
                    name: '/img/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 5000,
                    name: '/font/[name]-[hash:8].[ext]'
                }
            },

            /*
            * Extract css files
            * （提取css到单独文件loader）
            */
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader", {
                    publicPath: '../'
                })
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|control/,
                query: {
                    presets: ['es2015']
                }
            }

        ]
    },
    plugins:plugins,
    devServer: {
        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,

        // Unlike the cli flag, this doesn't set
        // HotModuleReplacementPlugin!
        hot: true,
        inline: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Parse host and port from env to allow customization.
        //
        // If you use Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: "localhost", // Defaults to `localhost`   process.env.HOST
        port: "8080",  // Defaults to 8080   process.env.PORT
        /*
        *  代理访问
        *  1、可以绕过同源策略 和 webpack '热更新'结合使用
        */
        proxy: {
            // '/devApi/*': {
            //     target: proxyTarget,
            //     secure: true,
            //     //rewrite 的方式扩展性更强，不限制服务的名称
            //     rewrite: function (req) {
            //     req.url = req.url.replace(/^\/devApi/, '');
            //     }
            // }
        }
    }
}
module.exports = config;
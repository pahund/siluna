/**
 * webpack.config-dev.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
const path = require('path'),
    webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'js'),
    entry: {
        index: [
            'webpack/hot/dev-server',
            './index'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    externals: {
        phaser: 'Phaser'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: '#source-map'
};

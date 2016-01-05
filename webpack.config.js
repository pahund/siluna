/**
 * webpack.config.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
const path = require("path"),
    webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname, "js"),
    entry: {
        index: "./index",
        boxes: "./boxes",
        siluna: "./siluna"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    externals: {
        pixi: "PIXI"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel"
                //loader: "babel?presets[]=es2015"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

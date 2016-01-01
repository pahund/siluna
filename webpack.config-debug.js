/**
 * webpack.config-debug.js
 *
 * Special webpack configuration for debugging with JetBrains IDEs. Used by npm script “dist-debug”.
 * See README for details.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
const path = require("path"),
    webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        index: "./js/index",
        boxes: "./js/boxes",
        siluna: "./js/siluna"
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
                loader: "babel?presets[]=es2015"
            }
        ]
    },
    devtool: "source-map"
};

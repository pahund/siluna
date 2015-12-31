/**
 * webpack.config.dev.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname,"js"),
    entry: {
        index: [
            "webpack/hot/dev-server",
            "./index"
        ],
        boxes: [
            "webpack/hot/dev-server",
            "./boxes"
        ],
        siluna: [
            "webpack/hot/dev-server",
            "./siluna"
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel?presets[]=es2015"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "#source-map"
};

/**
 * webpack.config.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
module.exports = {
    context: __dirname + "/js",
    entry: "./boxes",
    output: {
        path: __dirname + "/dist",
        filename: "boxes.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel?presets[]=es2015"
            }
        ]
    }
};

module.exports = {
    entry: "./client/index.js",             //root js
    output: {
        path: "./server/static",            //bundle will get dumped here
        publicPath: "/static",              //virtual location of bundle during dev
        filename: "bundle.js"               //name of the bundle
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    devtool: "cheap-module-source-map",     //source maps

    devServer: {
        contentBase: "./server/static",     //index.html lives here
        inline: true,                       //enable automatic refreshing
        proxy: {
            "*": {
                target: "http://localhost:3000",
                secure: false,
                bypass: function (req, res, proxyOptions) {
                    if (req.originalUrl === "/"){
                        console.log(`bypass: ${req.originalUrl}`);
                        return "/"
                    }
                    console.log(`proxy: ${req.originalUrl}`);
                }
            }
        }
    }
};
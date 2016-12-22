const cssnext = require('postcss-cssnext');
module.exports = {
    entry: "./client/index.js",             //root js
    output: {
        path: "./server/static",            //bundle will get dumped here
        publicPath: "/static",              //virtual location of bundle during dev
        filename: "bundle.js"               //name of the bundle
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/,
                //use css modules to make styles local
                //use postcss with cssnext to auto-prefix and use future css
                //use style-loader to load embed styles in the bundle
                loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader"
            },
        ]
    },

    postcss: [
        cssnext({ browsers: ['last 2 versions'] })
    ],

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
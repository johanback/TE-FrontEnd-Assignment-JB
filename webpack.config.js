var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/main.browser.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.(css|html)$/,
                loader: 'raw-loader',
                exclude: [root('./src/index.html')]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'raw-loader!less-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        //htmlWebpackPlugin - will generate index.html and inject the bundle inside it.
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new copyWebpackPlugin([
            { from: 'src/assets', to: 'assets'}
        ]), 
        new webpack.ContextReplacementPlugin(
            //fix for webpack warnings - angular/11580

            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            root('./src'), // location of your src
            {}
        )
    ],
    devServer: {
        // when using html 5 history api this options helps navigate back to index.html for 404 responses.
        historyApiFallback: true
    }
}

function root(__path) {
    return path.join(__dirname, __path);
}

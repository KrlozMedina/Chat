const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require = 'path';
const htmlWebpackPlugin = require = 'html-webpack-plugin';
const miniCssExtractPlugin = require = 'mini-css-extract-plugin';
const cssMinimizePlugin = require = 'css-minimize-webpack-plugin';

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@bable/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new miniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[name].css"
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new cssMinimizePlugin()],
    }
}

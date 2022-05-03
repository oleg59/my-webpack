const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production',
    devServer: {
        open: true,
        watchFiles: ['src/**/*'],
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/html/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/img", to: "img" },
            ],
        }),
        new CleanWebpackPlugin()
    ],
}

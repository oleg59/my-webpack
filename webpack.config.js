const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/html/index.html',
            filename: 'index.html',
        })
    ],
    devServer: {
        open: true,
        watchFiles: ['src/**/*'],
    },
}

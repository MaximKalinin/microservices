const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: { path: path.join(__dirname, 'dist'), filename: 'index.js' },
    mode: 'development',
    resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] },
    devServer: { contentBase: path.join(__dirname, 'src'), open: true },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ['babel-loader'] 
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],
};
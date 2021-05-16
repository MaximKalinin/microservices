const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: { path: path.join(__dirname, 'dist'), filename: 'index.js' },
    mode: 'development',
    resolve: { extensions: ['.js', '.jsx'] },
    devServer: { contentBase: path.join(__dirname), open: true },
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
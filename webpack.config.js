const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathToBundle = path.resolve(__dirname, 'bundle');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: pathToBundle,
        filename: '[contenthash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Invasion game',
            template: './index.html',
        }),
    ],
    devServer: {
        static: pathToBundle,
    },
};

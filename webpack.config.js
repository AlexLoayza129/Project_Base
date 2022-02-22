const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    { loader : "css-loader", options: { importLoaders : 1 }},
                    "postcss-loader",
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ]
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'sourcemap',
    entry : './src/app.js',
    output: {
        filename : 'bundle.js',
        path: path.resolve(__dirname + '/dist')
    },
    devServer: {
        contentBase: './dist'
    },
    module : {
        rules :  [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'raw-loader' // add raw loader npm package to make it work.
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename:"styles.css",
            allChunks:true
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'index_local.html', // Load a custom template (lodash by default see the FAQ for details)
        })
    ]
};
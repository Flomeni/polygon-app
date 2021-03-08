const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const RULES = [
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    },
    {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
    }
];

const PLUGINS = [
    new HtmlWebpackPlugin({
        title: 'Infinite scrolling',
        template: './src/app.html',
        inject: 'body'
    }),
    new CopyPlugin({
        patterns: [
            {
                from: './assets/images',
                to: 'assets/images'
            }
        ]
    })
];

module.exports = {
    entry: {
        main: './src/app.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    plugins: PLUGINS,
    module: {
        rules: RULES
    }
};
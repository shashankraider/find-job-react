
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'build.js'
    },
    devtool: "#eval-source-map",
    module: {
        rules: [
            { test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loaders: ['file-loader'],
                include: path.resolve(__dirname, '../')
            },
            
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"]
    },
    plugins: [HtmlWebpackPluginConfig,
        new webpack.LoaderOptionsPlugin({
            debug: true
          })]
};

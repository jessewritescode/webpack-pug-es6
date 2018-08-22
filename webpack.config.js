const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist', 'content')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env',  "stage-0", 'react'],
					"plugins": [
						"transform-async-to-generator",
					]
				}
			},
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					}
				]
			}
		]
	},
	entry: ["babel-polyfill", "./src"],
	devtool: 'inline-source-map',
	devServer: {
    contentBase: './dist/content',
    hot: true
  },
	plugins: [
		new UglifyJSPlugin(),
		new HtmlWebpackPlugin(),
		new CleanWebpackPlugin(['dist']),
		new webpack.HotModuleReplacementPlugin(),
	],
	mode: 'development',

	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			minChunks: 1,
			name: true,

			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		}
	}
};

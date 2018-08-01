const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebPack = require('webpack');


module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style','css']
			}
		]
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new WebPack.HotModuleReplacementPlugin()
	]
}
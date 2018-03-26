var extractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	plugins : [
		new htmlWebpackPlugin({
			template : "./index.html"
		}),
		new extractTextPlugin("[hash]-bundle.css")
	],
	entry : {
		main : "./main.js"
	},
	output : {
		path : "./build/",
		filename : "[hash]-bundle.js"
	},
	module : {
		loaders : [
			{
				test : /.css$/,
				loader : extractTextPlugin.extract("css")
			},
			{
				test : /.html$/,
				loader : "html"
			},
			{
				test : /.(png|gif|jpg)/,
				loader : "file-loader?name=image/[name].[ext]"
			}
		]
	}
}

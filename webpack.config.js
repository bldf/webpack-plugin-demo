const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var config = {
	module: {
		rules: [{
            test: /\.txt$/, // 专门处理txt文件
            use: path.resolve(__dirname, 'loaders/testLoader.js'),
		}]
	},
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: 'index.html' }),
    ]
}

module.exports = config ; 
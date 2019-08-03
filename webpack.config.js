const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TestPlugin = require('./plugin/TestPlugin') ;
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
      new TestPlugin({
        filename:'test.js',
        template:path.resolve(__dirname,'./otherFile/test.js')
      })
    ]
}

module.exports = config ; 
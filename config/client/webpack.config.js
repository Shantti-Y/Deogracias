const modulePath = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('../webpack.config.js');

const clientDir = `../../src/client`;

const clientConfig = merge(commonConfig, {
	entry: { client: [modulePath.resolve(__dirname, `${clientDir}/index.tsx`)] },
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
	node: { fs: "empty" },
	target: "web",
	devServer: {
		inline: true,
		contentBase: modulePath.join(__dirname, './dist'),
		hot: true,
		historyApiFallback: true,
		port: 9000
	}
});

module.exports = clientConfig;
const modulePath = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('../webpack.config.js');

const appDir = `../../src/app`;
const lpDir = `../../src/lp`;

const appConfig = merge(commonConfig, {
	entry: {
		app: [modulePath.resolve(__dirname, `${appDir}/index.tsx`)],
		lp: [modulePath.resolve(__dirname, `${lpDir}/index.tsx`)]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'app',
			template: './src/index.html',
			chunks: ['app']
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			chunks: ['lp']
		})
	],
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

module.exports = appConfig;
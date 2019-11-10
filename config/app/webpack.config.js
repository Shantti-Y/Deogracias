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
	resolve: {
		alias: {
			'@appAsset': modulePath.resolve(__dirname, `${appDir}/asset`),
			'@appComponent': modulePath.resolve(__dirname, `${appDir}/component`),
			'@appLayout': modulePath.resolve(__dirname, `${appDir}/layout`),
			'@appRoute': modulePath.resolve(__dirname, `${appDir}/route`),
			'@appStore': modulePath.resolve(__dirname, `${appDir}/store`),
			'@appAction': modulePath.resolve(__dirname, `${appDir}/store/action`),
			'@appReducer': modulePath.resolve(__dirname, `${appDir}/store/reducer`),
			'@appSaga': modulePath.resolve(__dirname, `${appDir}/store/saga`),
			'@appUtil': modulePath.resolve(__dirname, `${appDir}/util`),
			'@lpAsset': modulePath.resolve(__dirname, `${lpDir}/asset`),
			'@lpComponent': modulePath.resolve(__dirname, `${lpDir}/component`),
			'@lpLayout': modulePath.resolve(__dirname, `${lpDir}/layout`),
			'@lpRoute': modulePath.resolve(__dirname, `${lpDir}/route`)
		}
	},
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
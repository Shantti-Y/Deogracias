const modulePath = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryDir = '../src';
const outDir = '../dist';

module.exports = {
	entry: { index: [modulePath.resolve(__dirname, `${entryDir}/index.tsx`)] },
	output: {
		filename: 'main.js',
		path: modulePath.resolve(__dirname, `${outDir}`),
		publicPath: '/'
	},
	target: "web",
	mode: "development",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [{ loader: "ts-loader" }]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" }, 
					{ loader: "css-loader" },
					{
						loader: "less-loader",
						options: { javascriptEnabled: true }
					}
				]
			},
			{
				test: /\.(png|jpg|gif|mp4)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: modulePath.resolve(__dirname, `${entryDir}/assets/image`),
						publicPath: modulePath.resolve(__dirname, `${outDir}/assets/image`)
					}
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader'
			}
		]
	},
	node: { fs: "empty" },
	devServer: {
		inline: true,
		contentBase: modulePath.join(__dirname, './'),
		port: 9000,
		hot: true,
		historyApiFallback: true
	},
	plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.jpg', '.png', '.scss'],
		alias: {
			'@asset': modulePath.resolve(__dirname, `${entryDir}/asset`),
			'@component': modulePath.resolve(__dirname, `${entryDir}/component`),
			'@layout': modulePath.resolve(__dirname, `${entryDir}/layout`),
			'@route': modulePath.resolve(__dirname, `${entryDir}/route`),
			'@store': modulePath.resolve(__dirname, `${entryDir}/store`),
			'@action': modulePath.resolve(__dirname, `${entryDir}/store/action`),
			'@reducer': modulePath.resolve(__dirname, `${entryDir}/store/reducer`),
			'@saga': modulePath.resolve(__dirname, `${entryDir}/store/saga`),
			'@util': modulePath.resolve(__dirname, `${entryDir}/util`)
		}
	}
};
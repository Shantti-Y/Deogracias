const modulePath = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryDir = '../src';
const appDir = `${entryDir}/app`;
const outDir = '../dist';

module.exports = {
	entry: { index: [modulePath.resolve(__dirname, `${appDir}/index.tsx`)] },
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
	plugins: [new HtmlWebpackPlugin({ template: './src/app/index.html' })],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.jpg', '.png', '.scss'],
		alias: {
			'@appAsset': modulePath.resolve(__dirname, `${appDir}/asset`),
			'@appComponent': modulePath.resolve(__dirname, `${appDir}/component`),
			'@appLayout': modulePath.resolve(__dirname, `${appDir}/layout`),
			'@appRoute': modulePath.resolve(__dirname, `${appDir}/route`),
			'@appStore': modulePath.resolve(__dirname, `${appDir}/store`),
			'@appAction': modulePath.resolve(__dirname, `${appDir}/store/action`),
			'@appReducer': modulePath.resolve(__dirname, `${appDir}/store/reducer`),
			'@appSaga': modulePath.resolve(__dirname, `${appDir}/store/saga`),
			'@appUtil': modulePath.resolve(__dirname, `${appDir}/util`)
		}
	}
};
const modulePath = require('path');

const entryDir = '../src';
const outDir = '../dist';

const commonConfig = {
	mode: "development",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(ts|tsx)/,
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
	resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.jpg', '.png', '.scss'] },
	output: {
		filename: '[name].js',
		path: modulePath.resolve(__dirname, `${outDir}`),
		publicPath: '/'
	}
};

module.exports = commonConfig;
const modulePath = require('path');
const nodeExternals = require('webpack-node-externals');

const entryDir = './src';
const outDir = './dist';

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	target: 'node',
	externals: [nodeExternals()],
	devtool: 'inline-source-map',
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
	resolve: { extensions: ['.ts', '.js'] },
	output: {
		filename: 'server.js',
    path: modulePath.resolve(__dirname, 'dist')
	}
};
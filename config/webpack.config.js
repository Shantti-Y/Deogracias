const modulePath = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const entryDir = '../src';
const appDir = `${entryDir}/app`;
const serverDir = `${entryDir}/server`;
const outDir = '../dist';

const commonConfig = {
	output: {
		filename: '[name].js',
		path: modulePath.resolve(__dirname, `${outDir}`),
		publicPath: '/'
	},
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
						outputPath: modulePath.resolve(__dirname, `${appDir}/assets/image`),
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
	devServer: {
		inline: true,
		contentBase: modulePath.join(__dirname, './'),
		port: 9000,
		hot: true,
		historyApiFallback: true
	},
	resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.jpg', '.png', '.scss'] }
};

const appConfig = merge(commonConfig, {
	entry: { app: [modulePath.resolve(__dirname, `${appDir}/index.tsx`)] },
	plugins: [new HtmlWebpackPlugin({ template: './src/app/index.html' })],
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
			'@appUtil': modulePath.resolve(__dirname, `${appDir}/util`)
		}
	},
	node: { fs: "empty" },
	target: "web"
});

// FIXME: SyntaxError: Unexpected identifier
const serverConfig = merge(commonConfig, {
	entry: { server: [modulePath.resolve(__dirname, `${serverDir}/index.ts`)] },
	resolve: {
		alias: {
			'@serverRoute': modulePath.resolve(__dirname, `${serverDir}/route`),
			'@serverTemplate': modulePath.resolve(__dirname, `${serverDir}/template`),
			'@serverUtil': modulePath.resolve(__dirname, `${serverDir}/util`)
		}
	},
	target: "node"
});

module.exports = [appConfig, serverConfig];
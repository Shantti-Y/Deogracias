const modulePath = require('path');

const entryDir = '../../src';
const outDir = '../../dist';

const appDir = `../../src/client/app`;
const lpDir = `../../src/client/lp`;
const serverDir = `../../src/server`;

const commonConfig = {
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
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.jpg', '.png', '.scss'],
		alias: {
			'@app': modulePath.resolve(__dirname, `${appDir}`),
			'@appAsset': modulePath.resolve(__dirname, `${appDir}/asset`),
			'@appComponent': modulePath.resolve(__dirname, `${appDir}/component`),
			'@appLayout': modulePath.resolve(__dirname, `${appDir}/layout`),
			'@appRoute': modulePath.resolve(__dirname, `${appDir}/route`),
			'@appStore': modulePath.resolve(__dirname, `${appDir}/store`),
			'@appAction': modulePath.resolve(__dirname, `${appDir}/store/action`),
			'@appReducer': modulePath.resolve(__dirname, `${appDir}/store/reducer`),
			'@appSaga': modulePath.resolve(__dirname, `${appDir}/store/saga`),
			'@appUtil': modulePath.resolve(__dirname, `${appDir}/util`),
			'@lp': modulePath.resolve(__dirname, `${lpDir}`),
			'@lpAsset': modulePath.resolve(__dirname, `${lpDir}/asset`),
			'@lpComponent': modulePath.resolve(__dirname, `${lpDir}/component`),
			'@lpLayout': modulePath.resolve(__dirname, `${lpDir}/layout`),
			'@lpRoute': modulePath.resolve(__dirname, `${lpDir}/route`),
			'@serverRoute': modulePath.resolve(__dirname, `${serverDir}/route`),
			'@serverTemplate': modulePath.resolve(__dirname, `${serverDir}/template`),
			'@serverUtil': modulePath.resolve(__dirname, `${serverDir}/util`)
		}
	},
	output: { publicPath: '/' }
};

module.exports = commonConfig;
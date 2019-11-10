const modulePath = require('path');
const merge = require('webpack-merge');
const commonConfig = require('../webpack.config.js');

const serverDir = `../../src/server`;

const serverConfig = merge(commonConfig, {
	entry: { server: [modulePath.resolve(__dirname, `${serverDir}/index.ts`)] },
	resolve: {
		alias: {
			'@serverRoute': modulePath.resolve(__dirname, `${serverDir}/route`),
			'@serverTemplate': modulePath.resolve(__dirname, `${serverDir}/template`),
			'@serverUtil': modulePath.resolve(__dirname, `${serverDir}/util`)
		}
	},
	target: "node",
	devServer: { port: 8000 }
});

module.exports = serverConfig;
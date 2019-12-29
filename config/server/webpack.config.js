const modulePath = require('path');
const merge = require('webpack-merge');
const commonConfig = require('../webpack.config.js');

const serverDir = `../../src/server`;

const serverConfig = merge(commonConfig, {
	entry: { server: [modulePath.resolve(__dirname, `${serverDir}/index.ts`)] },
	target: "node"
});

module.exports = serverConfig;
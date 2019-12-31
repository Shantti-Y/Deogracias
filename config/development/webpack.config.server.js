const modulePath = require('path');
const merge = require('webpack-merge');
const devConfig = require('./webpack.config.js');
const serverConfig = require('../server/webpack.config.js');

const outDir = '../../dev';

const developmentServerConfig = merge(
	devConfig,
	serverConfig,
	{ output: { path: modulePath.join(__dirname, `${outDir}`) } }
);

module.exports = developmentServerConfig;
const merge = require('webpack-merge');
const devConfig = require('./webpack.config.js');
const serverConfig = require('../server/webpack.config.js');

const developmentServerConfig = merge(devConfig, serverConfig);

module.exports = developmentServerConfig;
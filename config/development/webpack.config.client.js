const merge = require('webpack-merge');
const devConfig = require('./webpack.config.js');
const clientConfig = require('../client/webpack.config.js');

const developmentClientConfig = merge(devConfig, clientConfig, { devServer: { port: 9000	} });

module.exports = developmentClientConfig;
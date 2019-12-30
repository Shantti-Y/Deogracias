const modulePath = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientDir = `../../src/client`;
const htmlDir = `./src`;

const clientConfig = {
	entry: { client: [modulePath.resolve(__dirname, `${clientDir}/index.tsx`)] },
	plugins: [new HtmlWebpackPlugin({ template: `${htmlDir}/index.html` })],
	node: { fs: "empty" },
	target: "web"
};

module.exports = clientConfig;
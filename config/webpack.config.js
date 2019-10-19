const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryDir = '../src';
const outDir = '../dist';

module.exports = {
  entry: {
    index: [path.resolve(__dirname, `${entryDir}/index.tsx`)]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, `${outDir}`)
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
        { loader: "ts-loader" }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, './'),
    port: 9000,
    hot: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })]
};
var path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const webpack = require('webpack');
const package = require('./package.json')

module.exports = {
  entry: {
    app: ["./browser.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: `element-creator.min.js`
  },
  plugins: [
    new MinifyPlugin()
  ]
};
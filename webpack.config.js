var path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: {
    app: ["./index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "element-creator.min.js"
  },
  plugins: [
    new MinifyPlugin()
  ]
};
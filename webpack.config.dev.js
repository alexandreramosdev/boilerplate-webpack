const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  devtool: "eval",

  output: {
    pathinfo: true,
    publicPath: "/",
    filename: "bundle.js"
  },

  devServer: {
    host: "0.0.0.0",
    port: 3333
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
});

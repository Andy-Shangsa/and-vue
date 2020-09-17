/**
 * @description 编译演示
 */
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const config = require("./config");
const webpackBaseConfig = require("./webpack.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = merge(webpackBaseConfig, {
  mode: "development",
  entry: config.resolvePath("./examples/play.js"),
  output: {
    path: config.resolvePath("./examples/and-vue/"),
    publicPath: process.env.CI_ENV || "",
    filename: "[name].[hash:7].js",
    chunkFilename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: config.alias,
    modules: ["node_modules"],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8088,
    publicPath: "/",
    hot: true,
  },
  stats: {
    children: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./examples/index.html",
      filename: "./index.html",
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        compilerOptions: {
          preserveWhitespace: false,
        },
      },
    }),
  ],
  optimization: {
    minimizer: [],
  },
  devtool: "#eval-source-map",
});

module.exports = webpackConfig;

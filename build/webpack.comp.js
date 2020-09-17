/**
 * @description 单独打包组件，按需加载
 */
const { merge } = require("webpack-merge");
const Components = require("../components.json");
const config = require("./config");
const webpackBaseConfig = require("./webpack.base.js");

const webpackConfig = merge(webpackBaseConfig, {
  mode: "production",
  entry: Components,
  output: {
    path: config.resolvePath("./lib"),
    publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[id].js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: config.alias,
    modules: ["node_modules"]
  },
  externals: config.externals,
  stats: "none",
  optimization: {
    minimize: false
  }
});

module.exports = webpackConfig;

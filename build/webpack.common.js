/**
 * @description 编译总包
 */
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const config = require("./config");

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    path: config.resolvePath("./lib"),
    publicPath: "/dist/",
    filename: "and-vue.common.js",
    chunkFilename: "[id].js",
    libraryExport: "default",
    library: "AND",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: config.alias,
    modules: ["node_modules"],
  },
  externals: config.externals,
  stats: {
    children: false,
  },
  optimization: {
    minimize: false,
  },
});

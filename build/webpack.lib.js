/**
 * 编译总包
 */
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
const config = require("./config");

const webpackConfig = {
  mode: "production",
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    path: config.resolvePath("./lib"),
    publicPath: "/dist/",
    filename: "index.js",
    chunkFilename: "[id].js",
    libraryTarget: "umd",
    libraryExport: "default",
    library: "AND",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: config.alias,
  },
  externals: {
    vue: config.vue,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  performance: {
    hints: false,
  },
  stats: {
    children: false,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
    ],
  },
  plugins: [new ProgressBarPlugin(), new VueLoaderPlugin()],
};

module.exports = webpackConfig;

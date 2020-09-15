/**
 * 文档演示
 */
const path = require("path");
const webpack = require("webpack");
const config = require("./config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const webpackConfig = {
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
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.md$/,
      //   use: [
      //     {
      //       loader: "vue-loader",
      //       options: {
      //         compilerOptions: {
      //           preserveWhitespace: false,
      //         },
      //       },
      //     },
      //     {
      //       loader: path.resolve(__dirname, "./md-loader/index.js"),
      //     },
      //   ],
      // },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: path.posix.join("static", "[name].[hash:7].[ext]"),
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./examples/index.html",
      filename: "./index.html",
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
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
};

module.exports = webpackConfig;

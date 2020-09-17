const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Components = require("../components.json");
const resolvePath = dir => path.resolve(__dirname, "../", dir);
exports.resolvePath = resolvePath;

exports.alias = {
  "and-vue": resolvePath("./"),
  "@main": resolvePath("./src"),
  "@components": resolvePath("./src/packages"),
  "@styles": resolvePath("./src/styles"),
  "@utils": resolvePath("./src/utils"),
  "@mixins": resolvePath("./src/mixins"),
  "@locale": resolvePath("./src/locale"),
  "@transitions": resolvePath("./src/transitions"),
  "@directives": resolvePath("./src/directives"),
  "@examples": resolvePath("./examples"),
};

exports.vue = {
  root: "Vue",
  commonjs: "vue",
  commonjs2: "vue",
  amd: "vue",
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
//「从输出的 bundle 中排除依赖」
let externals = {};
Object.keys(Components).forEach(function(key) {
  externals[`and-vue/src/packages/${key}`] = `and-vue/lib/${key}`;
});
externals = [
  Object.assign(
    {
      vue: "vue",
    },
    externals
  ),
  nodeExternals(),
];

exports.externals = externals;

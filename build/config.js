const path = require("path");
function resolvePath(resolvePath) {
  return path.resolve(__dirname, "../", resolvePath);
}
exports.resolvePath = resolvePath;

exports.alias = {
  "and-vue": resolvePath("./"),
  "@main": resolvePath("./src"),
  "@components": resolvePath("./src/packages"),
  "@styles": resolvePath("./src/styles"),
  "@utils": resolvePath("./src/utils"),
  "@examples": resolvePath("./examples"),
  // "@types": resolvePath("./types"),
  // "@mixins": resolvePath("./src/mixins"),
  // "@locale": resolvePath("./src/locale"),
  // "@transitions": resolvePath("./src/transitions"),
  // "@directives": resolvePath("./src/directives"),
  // "@form": resolvePath("./packages/form/src"),
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

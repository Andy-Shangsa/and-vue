module.exports = {
  globals: {
    ga: true,
    chrome: true,
  },
  plugins: ["html", "json"],
  extends: "elemefe",
  rules: {
    "no-restricted-globals": ["error", "event", "fdescribe"],
    quotes: ["off", "double"],
    semi: "off",
    eqeqeq: "off",
    indent: "off",
    curly: "off",
  },
  parserOptions: {
    ecmaVersion: 6,
  },
};

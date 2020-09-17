import Button from "@components/button/index";

const components = { Button };

const install = function(app, opts = {}) {
  Object.values(components).forEach(component => {
    app.component(component.name, component);
  });

  app.config.globalProperties.$ELEMENT = {
    size: opts.size || "",
    zIndex: opts.zIndex || 2000,
  };
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.20.09.15",
  install,
  ...components,
};

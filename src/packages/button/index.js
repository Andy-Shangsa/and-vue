import Button from "./main/button";

/* istanbul ignore next */
Button.install = function(app) {
  app.component(Button.name, Button);
};

export default Button;

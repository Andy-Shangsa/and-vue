import { createApp } from "vue";
import AndVue from "@main/index.js";
import App from "./play/index.vue";
// import "packages/theme-chalk/src/index.scss";
console.log(AndVue)
const app = createApp(App);
app.use(AndVue);

app.mount("#app");

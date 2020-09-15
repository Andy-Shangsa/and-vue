import { createApp } from "vue";
import AndVue from "@main/index.js";
import App from "./play/index.vue";
import "@styles/index.scss";
const app = createApp(App);
app.use(AndVue);

app.mount("#app");

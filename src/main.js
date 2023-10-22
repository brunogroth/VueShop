import { createApp } from "vue";
import App from "./App.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import router from "./router.js";

const app = createApp(App);

app.use(router);

app.component("BaseBadge", BaseBadge);

app.mount("#app");

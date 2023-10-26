import { createApp } from "vue";
import App from "./App.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import router from "./router.js";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("BaseBadge", BaseBadge);

app.mount("#app");

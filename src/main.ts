import { createApp, h } from "vue";
import App from "./App.vue";
import { Quasar, Dialog, Notify } from "quasar";
import quasarUserOptions from "./plugins/quasar-user-options";
import router from "./plugins/router";

const app = createApp({
  render: () => h(App),
});
app.use(router);
app.use(Quasar, { plugins: { Dialog, Notify } }, quasarUserOptions);
app.mount("#app");

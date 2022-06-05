import { createApp } from "vue";
import App from "./App.vue";
import { Quasar, Dialog, Notify } from "quasar";
import quasarUserOptions from "./plugins/quasar-user-options";


const app = createApp(App);

app.use(Quasar, { plugins: { Dialog, Notify } }, quasarUserOptions);
app.mount("#app");

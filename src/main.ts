import { createApp } from "vue";
import { createPinia } from "pinia";
import type { PluginOptions } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";

import "../node_modules/bulma/css/bulma.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faEnvelope, faLock);

const app = createApp(App);
const toastOptions: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};

/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(Toast, toastOptions);

app.mount("#app");

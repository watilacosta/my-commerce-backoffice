import { createApp } from "vue";
import { createPinia } from "pinia";
import type { PluginOptions } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "reflect-metadata"; // dependency of class-transformer

import App from "./App.vue";
import router from "./router";

import "../node_modules/bulma/css/bulma.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faEnvelope,
  faLock,
  faRightFromBracket,
  faUsers,
  faBagShopping,
  faTags,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faEnvelope,
  faLock,
  faRightFromBracket,
  faUsers,
  faBagShopping,
  faTags,
  faStore
);

const app = createApp(App);
const toastOptions: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  maxToasts: 4,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  transition: "Vue-Toastification__slideBlurred",
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

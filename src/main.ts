import { createApp } from "vue";
import { createPinia } from "pinia";
import type { PluginOptions } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "reflect-metadata"; // dependency of class-transformer
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import "../node_modules/bulma/css/bulma.css";
import { library } from "@fortawesome/fontawesome-svg-core"; /* import the fontawesome core */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; /* import font awesome icon component */
import SmartTable from "vuejs-smart-table";
import {
  faEnvelope,
  faLock,
  faRightFromBracket,
  faUsers,
  faBagShopping,
  faTags,
  faStore,
  faUserPen,
  faUserGear,
  faUser,
  faCheck,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons"; /* import specific icons */

/* add icons to the library */
library.add(
  faEnvelope,
  faLock,
  faRightFromBracket,
  faUsers,
  faBagShopping,
  faTags,
  faStore,
  faUserPen,
  faUserGear,
  faUser,
  faCheck,
  faEnvelope,
  faLayerGroup
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

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(SmartTable);
app.use(pinia);
app.use(router);
app.use(Toast, toastOptions);

app.mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";

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
library.add(faEnvelope, faLock)

const app = createApp(App);

/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");

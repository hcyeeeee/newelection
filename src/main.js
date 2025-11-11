import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

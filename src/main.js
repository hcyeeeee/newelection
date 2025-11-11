import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router, VueAxios, axios);

app.mount("#app");

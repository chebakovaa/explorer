import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "metro4/build/css/metro-all.min.css";
import vuetify from "./plugins/vuetify";

createApp(App).use(store).use(vuetify).use(router).mount("#app");

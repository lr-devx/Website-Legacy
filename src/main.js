import "./styles/main.css";

import { createApp } from "vue";
import { marked } from "marked";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

marked.use({
    mangle: false,
    headerIds: false
});

createApp(App).use(i18n)
              .use(router)
              .mount("#app");
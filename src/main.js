import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import "./assets/css/reset.css";
import "./assets/css/main.css";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router)
    .use(createPinia())
    .mount('#app');
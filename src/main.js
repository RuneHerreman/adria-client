import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import "./assets/css/reset.css";
import "./assets/css/main.css";

const app = createApp(App);
app.use(router)
    .mount('#app')

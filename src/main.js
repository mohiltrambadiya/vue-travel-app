import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from "./router/index.js"
import AppLink from "../src/components/AppLink.vue"

createApp(App).component("app-link", AppLink).use(router).mount('#app')

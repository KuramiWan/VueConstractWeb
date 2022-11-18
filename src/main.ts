import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import router from "./router";
import Notifications from 'notiwind'
const app = createApp(App)
const head = createHead()
app.use(Notifications)
app.use(router)
app.use(head)
app.mount(document.body)

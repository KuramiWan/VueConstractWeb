import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import router from "./router";
import axios from "axios";
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)
const head = createHead()
axios.defaults.baseURL ="http://127.0.0.1:4523/m1/1712853-0-default"

app.use(Notifications)
app.use(router)
app.use(head)
app.mount(document.body)

//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // Импортируем роутер

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router) // Подключаем роутер к приложению
app.mount('#app')
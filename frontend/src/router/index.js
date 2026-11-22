import { createRouter, createWebHistory } from 'vue-router'
// Импортируем ваши созданные компоненты
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Preferences from '../views/Preferences.vue'
import Results from '../views/Results.vue'

const routes = [
  { path: '/', redirect: '/login' }, // При заходе на главную перекидываем на логин
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/preferences', name: 'Preferences', component: Preferences },
  { path: '/results', name: 'Results', component: Results }
]

const router = createRouter({
  history: createWebHistory(), // Используем историю браузера (без # в URL)
  routes
})

export default router
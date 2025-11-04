import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import SerieDetalle from './components/SerieDetalle.vue'
import NuevoPersonaje from './components/NuevoPersonaje.vue'
import CambiarPersonaje from './components/CambiarPersonaje.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/serie/:id', name: 'serie', component: SerieDetalle, props: true },
  { path: '/nuevo', name: 'nuevo', component: NuevoPersonaje },
  { path: '/cambiar', name: 'cambiar', component: CambiarPersonaje },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

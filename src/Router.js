import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import MenuSeries from './components/MenuSeries.vue'
import SerieDetalle from './components/SerieDetalle.vue'
import NuevoPersonaje from './components/NuevoPersonaje.vue'
import CambiarPersonaje from './components/CambiarPersonaje.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/menu-series', component: MenuSeries },
  { path: '/serie/:id', component: SerieDetalle },
  { path: '/serie/:id/nuevo-personaje', component: NuevoPersonaje },
  { path: '/cambiar-personaje/:id', component: CambiarPersonaje } // recibe id
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

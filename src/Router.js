import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import MenuSeries from './components/MenuSeries.vue';
import SerieDetalle from './components/SerieDetalle.vue';
import NuevoPersonaje from './components/NuevoPersonaje.vue';
import CambiarPersonaje from './components/CambiarPersonaje.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/series', name: 'MenuSeries', component: MenuSeries },
  { path: '/serie/:id', name: 'SerieDetalle', component: SerieDetalle, props: true },
  { path: '/nuevo-personaje', name: 'NuevoPersonaje', component: NuevoPersonaje },
  { path: '/cambiar-personaje/:idPersonaje/:idSerie', name: 'CambiarPersonaje', component: CambiarPersonaje, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

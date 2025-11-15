// Router de la aplicación
// Define las rutas principales y qué componentes renderiza cada una.
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import MenuSeries from './components/MenuSeries.vue';
import SerieDetalle from './components/SerieDetalle.vue';
import NuevoPersonaje from './components/NuevoPersonaje.vue';
import CambiarPersonaje from './components/CambiarPersonaje.vue';

// Rutas de la aplicación:
//  - '/' -> HomePage (página de bienvenida)
//  - '/series' -> MenuSeries (lista de series)
//  - '/serie/:id' -> SerieDetalle (detalle de una serie; recibe prop id)
//  - '/nuevo-personaje' -> NuevoPersonaje (formulario para crear personaje)
//  - '/cambiar-personaje/:idPersonaje/:idSerie' -> CambiarPersonaje (modificar personaje; recibe idPersonaje e idSerie)
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

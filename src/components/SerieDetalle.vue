<template>
  <!--
    Componente: SerieDetalle
    Propósito: Mostrar la información de una serie específica y la lista de sus personajes.
    Comportamiento: Busca la serie por id en el montaje y muestra un estado de carga si aún no está disponible.
  -->
  <div v-if="serie" class="serie-container">
    <h2>{{ serie.nombre }}</h2>

    <ul class="personajes-list">
      <li v-for="personaje in serie.personajes" :key="personaje.id">
        <span>{{ personaje.nombre }}</span>
        <router-link :to="`/cambiar-personaje/${personaje.id}/${serie.id}`">
          <button class="change-btn">Cambiar Serie</button>
        </router-link>
      </li>
    </ul>
  </div>

  <div v-else class="loading">
    <p>Cargando serie...</p>
  </div>
</template>

<script setup>
// Componente con <script setup>.
import { ref, onMounted } from 'vue';
import SeriesServices from '../services/SeriesServices.js';
import { useRoute } from 'vue-router';

// Obtener parámetro de ruta (id de la serie)
const route = useRoute();
const serieId = route.params.id;

// Estado local para la serie seleccionada
const serie = ref(null);

// Al montar, obtener todas las series y buscar la que coincida con el id
onMounted(async () => {
  try {
    const todasSeries = await SeriesServices.getSeries();
    serie.value = todasSeries.find(s => s.id == serieId);
  } catch (error) {
    // Mostrar en consola cualquier error de carga
    console.error("Error al cargar la serie:", error);
  }
});
</script>

<style scoped>
.serie-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  text-align: center;
}

.personajes-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.personajes-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.change-btn {
  background-color: #74ebd5;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: 0.3s;
}

.change-btn:hover {
  background-color: #5ac1b8;
  transform: translateY(-2px);
}
</style>

<template>
  <div class="menu-container">
    <h2>Lista de Series</h2>
    <ul>
      <li v-for="serie in series" :key="serie.id">
        {{ serie.nombre }}
        <router-link :to="`/serie/${serie.id}`">
          <button class="view-btn">Ver Detalle</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Componente: MenuSeries
// Propósito: Mostrar la lista de series disponibles y permitir navegar al detalle de cada una.
import { ref, onMounted } from 'vue';
import SeriesServices from '../services/SeriesServices.js';

// Estado local: lista de series
const series = ref([]);

// Al montar, solicitar la lista de series al servicio
onMounted(async () => {
  try {
    series.value = await SeriesServices.getSeries();
  } catch (error) {
    // Loguear errores de carga
    console.error(error);
  }
});
</script>

<style scoped>
.menu-container {
  max-width: 700px;
  margin: 30px auto;
  padding: 20px;
  background: #e0eafc;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  padding: 10px;
  border-bottom: 1px solid #cfcfcf;
}

.view-btn {
  background-color: #acb6e5;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.view-btn:hover {
  background-color: #8796d2;
  transform: translateY(-2px);
}
</style>

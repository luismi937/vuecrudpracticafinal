<template>
  <div>
    <h2>{{ serie.nombre }}</h2>
    <img :src="serie.imagen" class="img-fluid mb-3" style="max-height:300px" />
    <div class="mb-3">
      <router-link class="btn btn-success me-2" to="/nuevo">Nuevo Personaje</router-link>
      <router-link class="btn btn-warning" to="/cambiar">Cambiar Personaje</router-link>
    </div>

    <h3>Personajes</h3>
    <ul class="list-group">
      <li v-for="p in personajes" :key="p.idPersonaje" class="list-group-item">
        {{ p.nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SeriesService from '../services/SeriesService.js'  // ✅ import correcto

const route = useRoute()
const serie = ref({})
const personajes = ref([])

onMounted(async () => {
  serie.value = await SeriesService.getSerie(route.params.id)
  personajes.value = await SeriesService.getPersonajesSerie(route.params.id)
})
</script>

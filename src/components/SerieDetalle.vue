<template>
  <div class="container mt-4">
    <h3>Serie: {{ serie.nombre }}</h3>
    <router-link :to="'/menu-series'" class="btn btn-secondary mb-3">Volver</router-link>

    <h4>Personajes</h4>
    <ul class="list-group mb-3">
      <li v-for="p in personajes" :key="p.id" class="list-group-item d-flex justify-content-between align-items-center">
        {{ p.nombre }}
        <router-link :to="'/cambiar-personaje/' + p.id" class="btn btn-sm btn-warning">Modificar</router-link>
      </li>
    </ul>

    <router-link :to="'/serie/' + serie.id + '/nuevo-personaje'" class="btn btn-primary">Nuevo personaje</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SeriesService from '../services/SeriesService.js'

const route = useRoute()
const serie = ref({})
const personajes = ref([])

onMounted(async () => {
  const id = route.params.id
  serie.value = await SeriesService.getSerieById(id)
  personajes.value = await SeriesService.getPersonajesBySerie(id)
})
</script>

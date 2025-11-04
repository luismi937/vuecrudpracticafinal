<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Series</router-link>
      <ul class="navbar-nav">
        <li v-for="serie in series" :key="serie.idSerie" class="nav-item">
          <router-link class="nav-link" :to="`/serie/${serie.idSerie}`">
            {{ serie.nombre }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SeriesService from '../services/SeriesService.js' 

const series = ref([])

onMounted(async () => {
  series.value = await SeriesService.getSeries()
})
</script>

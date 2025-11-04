<template>
  <div class="container mt-4">
    <h3>Menú de series</h3>
    <ul class="list-group">
      <li v-for="serie in series" :key="serie.id" class="list-group-item">
        <router-link :to="'/serie/' + serie.id">{{ serie.nombre }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SeriesService from '../services/SeriesService.js'

const series = ref([])

onMounted(async () => {
  series.value = await SeriesService.getSeries()
})
</script>

<template>
  <div class="container mt-4">
    <h3>Nuevo personaje para {{ serie.nombre }}</h3>
    <form @submit.prevent="crearPersonaje">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" v-model="personaje.nombre" required>
      </div>
      <button type="submit" class="btn btn-primary">Crear</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import SeriesService from '../services/SeriesService.js'

const route = useRoute()
const router = useRouter()
const personaje = ref({ nombre: '', serieId: null })
const serie = ref({})

onMounted(async () => {
  const id = route.params.id
  serie.value = await SeriesService.getSerieById(id)
  personaje.value.serieId = serie.value.id
})

const crearPersonaje = async () => {
  await SeriesService.createPersonaje(personaje.value)
  Swal.fire('Éxito', 'Personaje creado', 'success')
  router.push('/serie/' + personaje.value.serieId)
}
</script>

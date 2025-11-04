<template>
  <div class="container mt-4">
    <h3>Cambiar personaje</h3>
    <form @submit.prevent="cambiarPersonaje">
      <div class="mb-3">
        <label class="form-label">Nombre del personaje</label>
        <input type="text" class="form-control" v-model="personaje.nombre" required>
      </div>

      <div class="mb-3">
        <label class="form-label">Serie</label>
        <select class="form-select" v-model="personaje.serieId" required>
          <option v-for="serie in series" :key="serie.id" :value="serie.id">
            {{ serie.nombre }}
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Cambiar</button>
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

const personaje = ref({ id: 0, nombre: '', serieId: null })
const series = ref([])

onMounted(async () => {
  // Cargar series para el select
  series.value = await SeriesService.getSeries()

  // Cargar datos del personaje por id
  const id = route.params.id
  const p = await SeriesService.getPersonajeById(id)
  if (p) {
    personaje.value = p
  } else {
    Swal.fire('Error', 'Personaje no encontrado', 'error')
    router.push('/') // Redirige al Home si no existe
  }
})

const cambiarPersonaje = async () => {
  const result = await Swal.fire({
    title: '¿Seguro que quieres cambiar este personaje?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, cambiar',
    cancelButtonText: 'Cancelar'
  })

  if (result.isConfirmed) {
    await SeriesService.updatePersonaje(personaje.value)
    Swal.fire('Listo', 'Personaje cambiado', 'success')
    router.push('/serie/' + personaje.value.serieId)
  }
}
</script>

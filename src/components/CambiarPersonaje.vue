<template>
  <div class="card p-3">
    <h3 class="mb-3">Cambiar personaje de serie</h3>

    <form @submit.prevent="cambiar">
      <!-- Seleccionar personaje -->
      <div class="mb-3">
        <label class="form-label">Personaje:</label>
        <select v-model="idPersonaje" class="form-select" required>
          <option disabled value="">Seleccione personaje</option>
          <option v-for="p in personajes" :key="p.idPersonaje" :value="p.idPersonaje">
            {{ p.nombre }}
          </option>
        </select>
      </div>

      <!-- Seleccionar serie -->
      <div class="mb-3">
        <label class="form-label">Nueva Serie:</label>
        <select v-model="idSerie" class="form-select" required>
          <option disabled value="">Seleccione serie</option>
          <option v-for="s in series" :key="s.idSerie" :value="s.idSerie">
            {{ s.nombre }}
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-warning w-100">Cambiar de serie</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SeriesService from '../services/SeriesService.js'  // ✅ import correcto
import Swal from 'sweetalert2'                             // ✅ import correcto

// Variables reactivas
const personajes = ref([])
const series = ref([])
const idPersonaje = ref('')
const idSerie = ref('')

// Cargar datos al montar el componente
onMounted(async () => {
  personajes.value = await SeriesService.getPersonajes()
  series.value = await SeriesService.getSeries()
})

// Método para cambiar el personaje de serie
const cambiar = async () => {
  if (!idPersonaje.value || !idSerie.value) {
    Swal.fire('Error', 'Debe seleccionar personaje y serie', 'error')
    return
  }

  const confirm = await Swal.fire({
    title: '¿Confirmar cambio?',
    text: 'El personaje cambiará a otra serie.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, cambiar',
    cancelButtonText: 'Cancelar'
  })

  if (confirm.isConfirmed) {
    await SeriesService.putCambiarPersonaje(idPersonaje.value, idSerie.value)
    Swal.fire('Hecho', 'El personaje ha cambiado de serie.', 'success')
  }
}
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: 0 auto;
}
</style>

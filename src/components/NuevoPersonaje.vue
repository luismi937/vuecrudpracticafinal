<template>
  <div class="card p-3">
    <h3>Insertar nuevo personaje</h3>
    <form @submit.prevent="insertarPersonaje">
      <input v-model="nombre" placeholder="Nombre" class="form-control mb-2" required />
      <input v-model="imagen" placeholder="URL Imagen" class="form-control mb-2" required />
      <select v-model="idSerie" class="form-control mb-3">
        <option disabled value="">Seleccione Serie</option>
        <option v-for="s in series" :key="s.idSerie" :value="s.idSerie">{{ s.nombre }}</option>
      </select>
      <button class="btn btn-success">Guardar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SeriesService from '../services/SeriesService.js'  // ✅ import correcto
import Swal from 'sweetalert2'                             // ✅ import correcto

const nombre = ref('')
const imagen = ref('')
const idSerie = ref('')
const series = ref([])

onMounted(async () => {
  series.value = await SeriesService.getSeries()
})

const insertarPersonaje = async () => {
  const personaje = {
    idPersonaje: 0,
    nombre: nombre.value,
    imagen: imagen.value,
    idSerie: parseInt(idSerie.value)
  }

  await SeriesService.postPersonaje(personaje)
  Swal.fire('Hecho', 'Personaje insertado correctamente', 'success')
}
</script>

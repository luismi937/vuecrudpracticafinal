<template>
  <div class="form-container">
    <h2>Modificar Personaje</h2>
    <form @submit.prevent="handleSubmit">
      <label>Nombre:</label>
      <input v-model="nombre" type="text" required />

      <label>Serie:</label>
      <select v-model="serieId" required>
        <option v-for="serie in series" :key="serie.id" :value="serie.id">{{ serie.nombre }}</option>
      </select>

      <button type="submit">Guardar Cambios</button>
    </form>
  </div>
</template>

<script>
import SeriesServices from '../services/SeriesServices.js';

export default {
  name: "CambiarPersonaje",
  props: {
    idPersonaje: Number
  },
  data() {
    return {
      nombre: '',
      serieId: '',
      series: []
    }
  },
  async mounted() {
    this.series = await SeriesServices.getSeries();

    if(this.idPersonaje) {
      const personaje = await SeriesServices.getPersonajeById(this.idPersonaje);
      this.nombre = personaje.nombre;
      this.serieId = personaje.serieId;
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await SeriesServices.updatePersonaje(this.idPersonaje, { nombre: this.nombre, serieId: this.serieId });
        alert("Personaje modificado!");
        this.$router.push('/menu-series');
      } catch (err) {
        console.error(err);
        alert("Error al modificar personaje");
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f4f4f4;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
label {
  display: block;
  margin: 0.5rem 0 0.2rem;
  font-weight: bold;
}
input, select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
button {
  padding: 0.7rem 1.5rem;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #1e8449;
}
</style>

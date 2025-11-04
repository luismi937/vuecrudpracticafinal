import axios from 'axios';

const API_BASE = 'https://apiseriespersonajes.azurewebsites.net';

export default {
  // Obtener todos los personajes de una serie (pasando la URL completa de la serie)
  async obtenerPersonajes(serieUrl) {
    try {
      const response = await axios.get(serieUrl + '/personajes');
      return response.data;
    } catch (error) {
      console.error("Error al obtener personajes:", error);
      throw error;
    }
  },

  // Crear un personaje nuevo en una serie
  async crearPersonaje(serieUrl, personaje) {
    try {
      const response = await axios.post(serieUrl + '/personajes', personaje);
      return response.data;
    } catch (error) {
      console.error("Error al crear personaje:", error);
      throw error;
    }
  },

  // Modificar un personaje usando la URL de la serie
  async modificarPersonaje(serieUrl, personaje) {
    try {
      const response = await axios.put(`${serieUrl}/personajes/${personaje.id}`, personaje);
      return response.data;
    } catch (error) {
      console.error("Error al modificar personaje:", error);
      throw error;
    }
  },

  // Obtener detalle de una serie
  async obtenerSerie(serieUrl) {
    try {
      const response = await axios.get(serieUrl);
      return response.data;
    } catch (error) {
      console.error("Error al obtener serie:", error);
      throw error;
    }
  },

  // Obtener todas las series
  async obtenerSeries() {
    try {
      const response = await axios.get(`${API_BASE}/series`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener series:", error);
      throw error;
    }
  }
};

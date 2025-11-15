// Servicio para consumir la API de series y personajes.
// Contiene métodos para obtener series, obtener una serie concreta, obtener personajes
// por serie y operaciones para insertar/actualizar personajes.
const API_BASE = "https://apiseriespersonajes.azurewebsites.net/api/";

export default {
  // Obtener todas las series
  async getSeries() {
    const response = await fetch(API_BASE + "series");
    if (!response.ok) throw new Error("Error al cargar series");
    return await response.json();
  },

  // Obtener una serie por su id
  // Parámetros: id (Number|String)
  async getSerie(id) {
    const response = await fetch(API_BASE + "series/" + id);
    if (!response.ok) throw new Error("Error al cargar la serie");
    return await response.json();
  },

  // Obtener personajes que pertenecen a una serie concreta
  // Parámetros: idSerie (Number|String)
  async getPersonajesSerie(idSerie) {
    const response = await fetch(API_BASE + "series/personajesserie/" + idSerie);
    if (!response.ok) throw new Error("Error al cargar personajes de la serie");
    return await response.json();
  },

  // Insertar un nuevo personaje
  // Parámetros: personaje (Object) con propiedades como { nombre, serieId }
  async postPersonaje(personaje) {
    const response = await fetch(API_BASE + "personajes", {
      method: "POST",
      headers: { "Content‑Type": "application/json" },
      body: JSON.stringify(personaje)
    });
    if (!response.ok) throw new Error("Error al insertar personaje");
    return await response.json();
  },

  // Cambiar la serie de un personaje (PUT)
  // Parámetros: idPersonaje (Number|String), idSerie (Number|String)
  async putCambiarPersonaje(idPersonaje, idSerie) {
    const response = await fetch(API_BASE + `personajes/${idPersonaje}/${idSerie}`, {
      method: "PUT"
    });
    if (!response.ok) throw new Error("Error al cambiar personaje de serie");
    return await response.json();
  }
};

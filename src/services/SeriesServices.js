// src/services/SeriesService.js
const API_URL = "https://apiseriespersonajes.azurewebsites.net/api/";

export default class SeriesService {
  
  // ✅ Método con fetch
  static async getSeries() {
    const response = await fetch(API_URL + "series");
    if (!response.ok) throw new Error("Error al cargar series");
    return await response.json();
  }

  static async getSerie(id) {
    const response = await fetch(API_URL + "series/" + id);
    if (!response.ok) throw new Error("Error al cargar la serie");
    return await response.json();
  }

  static async getPersonajesSerie(idSerie) {
    const response = await fetch(API_URL + "series/personajesserie/" + idSerie);
    if (!response.ok) throw new Error("Error al cargar los personajes de la serie");
    return await response.json();
  }

  static async getPersonajes() {
    const response = await fetch(API_URL + "personajes");
    if (!response.ok) throw new Error("Error al cargar los personajes");
    return await response.json();
  }

  static async postPersonaje(personaje) {
    const response = await fetch(API_URL + "personajes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personaje)
    });
    if (!response.ok) throw new Error("Error al insertar personaje");
  }

  static async putCambiarPersonaje(idPersonaje, idSerie) {
    const response = await fetch(API_URL + `personajes/${idPersonaje}/${idSerie}`, {
      method: "PUT"
    });
    if (!response.ok) throw new Error("Error al cambiar personaje de serie");
  }
}

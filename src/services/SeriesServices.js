const API_BASE = "https://apiseriespersonajes.azurewebsites.net/api/";

export default {
  async getSeries() {
    const response = await fetch(API_BASE + "series");
    if (!response.ok) throw new Error("Error al cargar series");
    return await response.json();
  },

  async getSerie(id) {
    const response = await fetch(API_BASE + "series/" + id);
    if (!response.ok) throw new Error("Error al cargar la serie");
    return await response.json();
  },

  async getPersonajesSerie(idSerie) {
    const response = await fetch(API_BASE + "series/personajesserie/" + idSerie);
    if (!response.ok) throw new Error("Error al cargar personajes de la serie");
    return await response.json();
  },

  async postPersonaje(personaje) {
    const response = await fetch(API_BASE + "personajes", {
      method: "POST",
      headers: { "Content‑Type": "application/json" },
      body: JSON.stringify(personaje)
    });
    if (!response.ok) throw new Error("Error al insertar personaje");
    return await response.json();
  },

  async putCambiarPersonaje(idPersonaje, idSerie) {
    const response = await fetch(API_BASE + `personajes/${idPersonaje}/${idSerie}`, {
      method: "PUT"
    });
    if (!response.ok) throw new Error("Error al cambiar personaje de serie");
    return await response.json();
  }
};

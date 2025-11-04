const API_URL = "https://apiseriespersonajes.azurewebsites.net/api/";

export default class SeriesService {

  // Ejemplo con fetch
  static async getSeries() {
    const res = await fetch(API_URL + "series");
    return await res.json();
  }

  static async getSerie(id) {
    const res = await fetch(API_URL + "series/" + id);
    return await res.json();
  }

  static async getPersonajesSerie(id) {
    const res = await fetch(API_URL + "series/personajesserie/" + id);
    return await res.json();
  }

  static async getPersonajes() {
    const res = await fetch(API_URL + "personajes");
    return await res.json();
  }

  static async postPersonaje(personaje) {
    await fetch(API_URL + "personajes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personaje),
    });
  }

  static async putCambiarPersonaje(idPersonaje, idSerie) {
    await fetch(API_URL + `personajes/${idPersonaje}/${idSerie}`, {
      method: "PUT",
    });
  }
}

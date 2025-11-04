const URL = 'https://apiseriespersonajes.azurewebsites.net/api'

export default {
  async getSeries() {
    const res = await fetch(`${URL}/series`)
    return await res.json()
  },

  async getSerieById(id) {
    const res = await fetch(`${URL}/series/${id}`)
    if (!res.ok) return null
    return await res.json()
  },

  async getPersonajesBySerie(idSerie) {
    const res = await fetch(`${URL}/series/${idSerie}/personajes`)
    return await res.json()
  },

  async getPersonajeById(id) {
    const res = await fetch(`${URL}/personajes/${id}`)
    if (!res.ok) return null
    return await res.json()
  },

  async createPersonaje(personaje) {
    await fetch(`${URL}/personajes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(personaje)
    })
  },

  async updatePersonaje(personaje) {
    await fetch(`${URL}/personajes/${personaje.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(personaje)
    })
  }
}

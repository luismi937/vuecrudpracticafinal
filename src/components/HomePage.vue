<template>
  <div class="home-container">
    <h1>Bienvenido a Series y Personajes</h1>
    <div class="button-container">
      <router-link to="/menu-series"><button class="nav-button">Menú Series</button></router-link>
      <router-link to="/nuevo-personaje"><button class="nav-button">Agregar Personaje</button></router-link>
      <router-link to="/modificar-personaje"><button class="nav-button">Modificar Personaje</button></router-link>
    </div>
  </div>
</template>

<script setup>
// Componente: HomePage
// Propósito: Página principal con enlaces de navegación hacia las secciones importantes
// Este archivo usa la sintaxis <script setup> de Vue 3 y no necesita props ni estado local por ahora.
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  color: #fff;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.button-container {
  margin-top: 30px;
  display: flex;
  gap: 20px;
}

.nav-button {
  background-color: #ffffffcc;
  color: #333;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.nav-button:hover {
  background-color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>

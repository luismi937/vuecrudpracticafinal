import { createApp } from 'vue'
import App from './App.vue'

// Importamos el router
import router from './Router'

// Importamos el archivo global donde registramos componentes globales
import './Global.js'

// Importamos Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Creamos la app
const app = createApp(App)

// Usamos el router
app.use(router)

// Montamos la app
app.mount('#app')

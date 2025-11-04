import { createApp } from 'vue'
import MenuSeries from './components/MenuSeries.vue'

// Registramos componente global
const app = createApp({})
app.component('MenuSeries', MenuSeries)


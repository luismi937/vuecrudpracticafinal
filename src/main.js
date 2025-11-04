import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import registerGlobalComponents from './Global'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)
registerGlobalComponents(app)
app.use(router)
app.mount('#app')

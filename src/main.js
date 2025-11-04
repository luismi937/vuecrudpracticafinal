import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import registerGlobalComponents from './global'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)
registerGlobalComponents(app)
app.use(router)
app.mount('#app')

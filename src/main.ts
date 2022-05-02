import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import core from './plugins/core'

const app = createApp(App)

app.use(router)
app.use(core)

app.mount('#app')

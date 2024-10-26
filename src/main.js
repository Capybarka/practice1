import { createApp } from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import './styles/main.scss'

import components from './components'

import router from './router/routes'

const app = createApp(App)

components.forEach(component => app.component(component.name, component))

app.use(vuetify).use(router)
app.mount('#app')

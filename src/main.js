import { createApp } from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import './styles/main.scss'

import { createPinia } from 'pinia'


import router from './router/routes'

const app = createApp(App)

app
     .use(vuetify)
     .use(createPinia())
     .use(router)
     
app.mount('#app')

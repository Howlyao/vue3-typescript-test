import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'
import './assets/main.css'
import axios from './httpRequest/index'
// const axios = require('./httpRequest/index')
const app = createApp(App)



app.use(createPinia())
app.use(router)

app.provide('$axios', axios)

app.mount('#app')

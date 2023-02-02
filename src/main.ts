import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import Antd from './plugins/antd'
import components from './components'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app
  .use(pinia)
  .use(Antd)
  .use(components)
  .mount('#app')

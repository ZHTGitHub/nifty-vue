import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import Antd from './plugins/antd'
import components from './components'
import popup from './components/popup'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app
  .use(pinia)
  .use(Antd)
  .use(components)
  .use(popup)
  .mount('#app')

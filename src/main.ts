import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import Antd from './plugins/antd'
import { install } from './packages/components'
import popup from './packages/components/popup'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app
  .use(pinia)
  .use(Antd)
  .use(popup)
  .use(install)
  .mount('#app')

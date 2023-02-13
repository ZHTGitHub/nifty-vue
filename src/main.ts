import { createApp } from 'vue'
import App from './App.vue'

import Antd from './plugins/antd'
import Rocket, { formStore } from './packages'

import './assets/main.css'

const app = createApp(App)
const pinia = formStore.createPinia()

app
  .use(pinia)
  .use(Antd)
  .use(Rocket)
  .mount('#app')

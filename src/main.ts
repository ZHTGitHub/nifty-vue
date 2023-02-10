import { createApp } from 'vue'
import App from './App.vue'

import Antd from './plugins/antd'
import * as packages from './packages'
import popup from './packages/components/popup'

import './assets/main.css'

const app = createApp(App)

app
  .use(packages.pinia)
  .use(Antd)
  .use(popup)
  .use(packages.install)
  .mount('#app')

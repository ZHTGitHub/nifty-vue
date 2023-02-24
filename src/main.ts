import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import Nifty, { formStore } from './index'

import 'ant-design-vue/dist/antd.css'
import './main.css'

const app = createApp(App)
const pinia = formStore.createPinia()

app
  .use(pinia)
  .use(Antd)
  .use(Nifty)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import Nifty, { form } from './index'

import router from './demos/router'

import 'ant-design-vue/dist/antd.css'
import 'nifty-style'
import './main.css'

const app = createApp(App)
const pinia = form.createPinia()

app
  .use(pinia)
  .use(Antd)
  .use(Nifty)
  .use(router)
  .mount('#app')

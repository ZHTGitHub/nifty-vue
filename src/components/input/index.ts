import type { App } from 'vue'
import Input from './src/index.vue'

export default {
  install(app: App) {
    app.component('z-input', Input)
  }
}
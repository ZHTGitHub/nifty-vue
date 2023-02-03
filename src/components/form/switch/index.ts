import type { App } from 'vue'
import Switch from './src/index.vue'

export default {
  install(app: App) {
    app.component('z-switch', Switch)
  }
}
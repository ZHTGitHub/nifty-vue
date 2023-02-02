import type { App } from 'vue'
import DatePicker from './src/index.vue'

export default {
  install(app: App) {
    app.component('z-date-picker', DatePicker)
  }
}
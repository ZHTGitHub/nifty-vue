import type { App } from 'vue'
import DatePicker from './src/index.vue'
import RangePicker from './src/rangePicker.vue'

export default {
  install(app: App) {
    app.component('z-date-picker', DatePicker)
    app.component('z-range-picker', RangePicker)
  }
}
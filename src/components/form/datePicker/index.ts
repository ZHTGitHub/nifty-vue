import type { App } from 'vue'
import DatePicker from './src/index.vue'
import RangePicker from './src/rangePicker.vue'

export default {
  install(app: App) {
    app.component(DatePicker.name, DatePicker)
    app.component(RangePicker.name, RangePicker)
  }
}
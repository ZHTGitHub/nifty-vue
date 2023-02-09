import type { App } from 'vue'
import DatePicker from './src/index.vue'
import RangePicker from './src/rangePicker.vue'

DatePicker.Range = RangePicker

DatePicker.install = function(app: App) {
  app.component(DatePicker.name, DatePicker)
  app.component(RangePicker.name, RangePicker)
  return app
}

export { RangePicker }

export default DatePicker as typeof DatePicker
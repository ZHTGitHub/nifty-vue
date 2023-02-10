import type { App } from 'vue'
import DatePicker from './DatePicker'
import RangePicker from './RangePicker'

DatePicker.Range = RangePicker

DatePicker.install = function(app: App) {
  app.component(DatePicker.name, DatePicker)
  app.component(RangePicker.name, RangePicker)
  return app
}

export { RangePicker }

export default DatePicker as typeof DatePicker
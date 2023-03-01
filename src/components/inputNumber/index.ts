import type { App } from 'vue'
import InputNumber from './InputNumber'

InputNumber.install = function(app: App) {
  app.component(InputNumber.name, InputNumber)
  return app
}

export default InputNumber as typeof InputNumber
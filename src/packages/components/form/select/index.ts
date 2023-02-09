import type { App } from 'vue'
import Select from './src/index.vue'

Select.install = function(app: App) {
  app.component(Select.name, Select)
  return app
}

export default Select as typeof Select
import type { App } from 'vue'
import Checkbox from './src/index.vue'
import CheckboxGroup from './src/group.vue'

Checkbox.Group = CheckboxGroup

Checkbox.install = function(app: App) {
  app.component(Checkbox.name, Checkbox)
  app.component(CheckboxGroup.name, CheckboxGroup)
  return app
}

export { CheckboxGroup }

export default Checkbox as typeof Checkbox
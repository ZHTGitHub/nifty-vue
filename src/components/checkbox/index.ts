import type { App } from 'vue'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'

Checkbox.Group = CheckboxGroup

Checkbox.install = function(app: App) {
  app.component(Checkbox.name, Checkbox)
  app.component(CheckboxGroup.name, CheckboxGroup)
  return app
}

export { CheckboxGroup }

export default Checkbox as typeof Checkbox
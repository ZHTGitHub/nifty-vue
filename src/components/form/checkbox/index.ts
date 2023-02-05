import type { App } from 'vue'
import Checkbox from './src/index.vue'
import CheckboxGroup from './src/group.vue'

export default {
  install(app: App) {
    app.component(Checkbox.name, Checkbox)
    app.component(CheckboxGroup.name, CheckboxGroup)
  }
}
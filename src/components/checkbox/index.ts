import type { App } from 'vue'
import Checkbox from './src/index.vue'
import CheckboxGroup from './src/group.vue'

export default {
  install(app: App) {
    app.component('z-checkbox', Checkbox)
    app.component('z-checkbox-group', CheckboxGroup)
  }
}
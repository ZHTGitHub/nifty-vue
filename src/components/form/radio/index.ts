import type { App } from 'vue'
import Radio from './src/index.vue'
import RadioGroup from './src/group.vue'

export default {
  install(app: App) {
    app.component('z-radio', Radio)
    app.component('z-radio-group', RadioGroup)
  }
}
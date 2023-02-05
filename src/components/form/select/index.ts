import type { App } from 'vue'
import Select from './src/index.vue'

export default {
  install(app: App) {
    app.component(Select.name, Select)
  }
}
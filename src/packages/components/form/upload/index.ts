import type { App } from 'vue'
import Upload from './src/index.vue'

export default {
  install(app: App) {
    app.component(Upload.name, Upload)
  }
}
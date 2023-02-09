import type { App } from 'vue'
import Editor from './src/index.vue'

export default {
  install(app: App) {
    app.component(Editor.name, Editor)
  }
}


import type { App } from 'vue'
import Editor from './src/index.vue'

Editor.install = function(app: App) {
  app.component(Editor.name, Editor)
  return app
}

export default Editor as typeof Editor


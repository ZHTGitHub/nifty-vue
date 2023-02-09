import type { App } from 'vue'
import Upload from './src/index.vue'

Upload.install = function(app: App) {
  app.component(Upload.name, Upload)
  return app
}

export default Upload as typeof Upload
import type { App } from 'vue'
import Upload from './Upload'

Upload.install = function(app: App) {
  app.component(Upload.name, Upload)
  return app
}

export default Upload as typeof Upload
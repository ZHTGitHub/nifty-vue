import type { App } from 'vue'
import Dialog from './Dialog'

Dialog.install = function(app: App) {
  app.component(Dialog.name, Dialog)
  return app
}

export default Dialog as typeof Dialog
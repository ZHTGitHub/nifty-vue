import type { App } from 'vue'
import Modal from './Modal'

Modal.install = function(app: App) {
  app.component(Modal.name, Modal)
  return app
}

export default Modal as typeof Modal
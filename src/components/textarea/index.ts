import type { App } from 'vue'
import Textarea from './Textarea'

Textarea.install = function(app: App) {
  app.component(Textarea.name, Textarea)
  return app
}

export default Textarea as typeof Textarea
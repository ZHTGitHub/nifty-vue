import type { App } from 'vue'
import Form from './Form'

Form.install = function(app: App) {
  app.component(Form.name, Form)
  return app
}

export default Form as typeof Form
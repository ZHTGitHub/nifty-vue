import type { App } from 'vue'
import Input from './src/index.vue'

Input.install = function(app: App) {
  app.component(Input.name, Input)
  return app
}

export default Input as typeof Input
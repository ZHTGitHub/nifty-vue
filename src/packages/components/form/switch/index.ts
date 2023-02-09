import type { App } from 'vue'
import Switch from './src/index.vue'

Switch.install = function(app: App) {
  app.component(Switch.name, Switch)
  return app
}

export default Switch as typeof Switch
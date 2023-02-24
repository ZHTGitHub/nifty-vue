import type { App } from 'vue'
import Sidebar from './Sidebar'

Sidebar.install = function(app: App) {
  app.component(Sidebar.name, Sidebar)
  return app
}

export default Sidebar as typeof Sidebar
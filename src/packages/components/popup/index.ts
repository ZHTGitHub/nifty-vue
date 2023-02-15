import type { App } from 'vue'
import Popup from './src'

Popup['install'] = function(app: App) {
  app.component(Popup.name, Popup)
  // app.config.globalProperties[`$${ Popup.name }`] = Popup
  return app
}

export default Popup as typeof Popup
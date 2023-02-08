import type { App } from 'vue'
import Popup from './src'

export default (app: App) => {
  app.config.globalProperties[`$${ Popup.name }`] = Popup
}
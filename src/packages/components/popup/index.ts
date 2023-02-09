import type { App } from 'vue'
import ZPopup from './src'

export default (app: App) => {
  app.config.globalProperties[`$${ ZPopup.name }`] = ZPopup
}

// 在js/ts中使用
export const Popup = ZPopup
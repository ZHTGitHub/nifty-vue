import { createApp, type App } from 'vue'
import Popup from './popup.vue'
import type { IOptions } from './types'

export default function popup(options: IOptions) {
  const node = document.createElement('div')
  document.body.appendChild(node)

  const popupApp = createApp(Popup, {
    ...options,
    visible: true,
    remove() {
      popupApp.unmount()
      document.body.removeChild(node)
    }
  })

  return popupApp.mount(node)
}
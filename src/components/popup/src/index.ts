import { createApp } from 'vue'
import Popup from './popup.vue'

export default function popup(options: any) {
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
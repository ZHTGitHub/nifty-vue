import { createApp } from 'vue'
import Popup from './popup'
import type { Options } from './types'

export default function popup(options: Options) {
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
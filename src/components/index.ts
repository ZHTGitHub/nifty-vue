import type { App } from 'vue'
import * as components from './components'
export * from './components'

const install = function (app: App) {
  Object.keys(components).forEach(key => {
    const component = components[key]

    if(component.install) {
      app.use(component)
    }
  })

  app.config.globalProperties.$popup = components.Popup

  return app
}

export default install
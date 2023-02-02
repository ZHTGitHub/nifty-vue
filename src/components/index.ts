import type { App } from 'vue'
import Button from './button'
import Input from './input'
import Switch from './switch'

const components = [
  Button,
  Input,
  Switch
]

export default {
  install(app: App) {
    components.map(component => {
      app.use(component)
    })
  }
}
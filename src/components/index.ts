import type { App } from 'vue'
import Button from './button'
import Checkbox from './checkbox'
import Input from './input'
import Radio from './radio'
import Select from './select'
import Switch from './switch'

const components = [
  Button,
  Checkbox,
  Input,
  Radio,
  Select,
  Switch
]

export default {
  install(app: App) {
    components.map(component => {
      app.use(component)
    })
  }
}
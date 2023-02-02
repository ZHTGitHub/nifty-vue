import type { App } from 'vue'

// 基础组件
import Button from './button'

// 表单组件
import Checkbox from './form/checkbox'
import Input from './form/input'
import Radio from './form/radio'
import Select from './form/select'
import Switch from './form/switch'

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
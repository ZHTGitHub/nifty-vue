import type { App } from 'vue'

// 基础组件
import Button from './button'

// 表单组件
import Checkbox from './form/checkbox'
import DatePicker from './form/datePicker'
import Editor from './form/editor'
import Input from './form/input'
import Radio from './form/radio'
import Select from './form/select'
import Switch from './form/switch'
import Upload from './form/upload'

const components = [
  Button,
  Checkbox,
  DatePicker,
  Editor,
  Input,
  Radio,
  Select,
  Switch,
  Upload
]

export default {
  install(app: App) {
    components.map(component => {
      app.use(component)
    })
  }
}
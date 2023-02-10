import type { App } from 'vue'
import Radio from './Radio'
import RadioGroup from './RadioGroup'

Radio.Group = RadioGroup

Radio.install = function(app: App) {
  app.component(Radio.name, Radio)
  app.component(RadioGroup.name, RadioGroup)
  return app
}

export { RadioGroup }

export default Radio as typeof Radio
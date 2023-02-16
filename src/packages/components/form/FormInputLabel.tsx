import { ref } from 'vue'
import type { FunctionalComponent } from 'vue'
import type { Direction, LabelConfig } from '../types'
import { 
  defaultHorizontalLabelConfig as defaultHConfig, 
  defaultVerticalLabelConfig as defaultVConfig 
} from '../default'
import classNames from './_utils/classNames'

interface LabelProps {
  direction?: Direction;
  label?: string | number;
  labelConfig?: LabelConfig;
}

const FormInputLabel: FunctionalComponent<LabelProps> = (props, { slots }) => {
  const defaultConfig = props.direction === 'horizontal' ? defaultHConfig : defaultVConfig
  const config = ref<LabelConfig>({ ...defaultConfig, ...props.labelConfig })
  const label = props.label || config.value.label || slots.label?.()
  
  const labelClassName = classNames('z-input-label', {
    mr2: label
  })

  return (
    label && 
    <label 
      class={ labelClassName }
      style={{
        width: config.value.width,
        textAlign: config.value.align
      }}
    >
      { label }
    </label>
  )
}

export default FormInputLabel



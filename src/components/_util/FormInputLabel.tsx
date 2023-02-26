import { ref } from 'vue'
import type { FunctionalComponent } from 'vue'
import type { Direction, LabelConfig } from './type'
import defaultValues from './defaultValues'
import classNames from './classNames'

const { horizontal: defaultHConfig, vertical: defaultVConfig } = defaultValues.labelConfig

interface LabelProps {
  direction?: Direction;
  label?: string | number;
  labelConfig?: LabelConfig;
}

const FormInputLabel: FunctionalComponent<LabelProps> = (props, { slots }) => {
  const defaultConfig = props.direction === 'horizontal' ? defaultHConfig : defaultVConfig
  const config = ref<LabelConfig>({ ...defaultConfig, ...props.labelConfig })
  const label = props.label || config.value.label || slots.label?.()
  
  const labelClassName = classNames('z-input-label')

  const { align, minWidth, width } = config.value

  return (
    label && 
    <label 
      class={ labelClassName }
      style={{
        width,
        minWidth,
        textAlign: align
      }}
    >
      { label }
    </label>
  )
}

export default FormInputLabel



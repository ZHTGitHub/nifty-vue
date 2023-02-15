import { ref } from 'vue'
import type { FunctionalComponent } from 'vue'
import type { LabelConfig } from '../types'
import { defaultLabelConfig } from '../default'
import classNames from './_utils/classNames'

export interface LabelProps {
  label?: string | number;
  labelConfig?: LabelConfig;
}

const FormInputLabel: FunctionalComponent<LabelProps> = (props, { slots }) => {
  const config = ref<LabelConfig>({ ...defaultLabelConfig, ...props.labelConfig })
  
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



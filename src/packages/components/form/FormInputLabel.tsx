import type { FunctionalComponent } from 'vue'
import classNames from './_utils/classNames'

export interface FormInputLabelProps {
  label?: string | number;
  width?: string | number;
}

const FormInputLabel: FunctionalComponent<FormInputLabelProps> = (props, { attrs, slots }) => {
  const { width } = { ...props, ...attrs }

  const label = props.label ?? slots.label?.()

  const labelClassName = classNames('z-input-label', {
    mr2: label
  })

  return (
    label && <label 
      class={ labelClassName }
      style={{
        width: `${ width }px`
      }}
    >
      { label }
    </label>
  )
}

export default FormInputLabel



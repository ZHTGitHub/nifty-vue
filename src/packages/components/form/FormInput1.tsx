import type { FunctionalComponent } from 'vue'
import FormInputLabel from './FormInputLabel'
import FormInputMessages from './FormInputMessages'
import classNames from './_utils/classNames'

interface FormInputProps {
  capsule?: boolean;
  direction?: 'horizontal' | 'vertical';
  errorMessage?: string;
  label?: string | number;
  labelWidth?: string | number;
  required?: boolean;
}

const FormInput: FunctionalComponent<FormInputProps> = (props, { attrs, slots }) => {
  const { capsule, direction, errorMessage, label, labelWidth, required } = { 
    ...props, 
    ...attrs 
  }

  const inputClassName = classNames('z-input', {
    capsule,
    horizontal: direction === 'horizontal',
    required,
    ['z-input-error']: errorMessage
  })

  return (
    <div class={ inputClassName }>
      <FormInputLabel 
        label={ label }
        width={ labelWidth }
      />
      
      <div class="z-input-control">
        { slots.default?.() }

        <FormInputMessages errorMessage={ errorMessage } />
      </div>
    </div>
  )
}

export default FormInput
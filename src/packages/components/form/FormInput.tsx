import { defineComponent, type Ref } from 'vue'
import FormInputLabel from './FormInputLabel'
import FormInputMessages from './FormInputMessages'
import classNames from './_utils/classNames'
import { useFormDefaultValue } from '../../hooks/useForm'
import { useFormRequired, useErrorMessage } from '../../hooks/useFormValidator'
import type { RuleItem } from './formProps'

interface FormInputProps {
  formId?: string;
  formKey?: string;
  capsule?: boolean;
  componentName: string;
  defaultValue?: any;
  direction?: 'horizontal' | 'vertical';
  label?: string | number;
  labelWidth?: string | number;
  required?: boolean;
  rules?: RuleItem[];
  valueRef?: Ref;
}

export default defineComponent({
  setup(props: FormInputProps, { attrs, slots }) {
    const { formId, formKey, capsule, componentName, defaultValue, direction, label, labelWidth, rules, valueRef } = { 
      ...props, 
      ...attrs 
    }

    useFormDefaultValue({
      formId, 
      formKey, 
      defaultValue, 
      valueRef
    })

    const required = useFormRequired(rules)

    const errorMessageRef = useErrorMessage({
      formId, 
      formKey, 
      componentName,
      valueRef, 
      rules
    })

    const inputClassName = classNames('z-input', {
      capsule,
      horizontal: direction === 'horizontal',
      required
    })
  
    return () => (
      <div class={[ inputClassName, {'z-input-error': errorMessageRef.value}]}>
        <FormInputLabel 
          label={ label }
          width={ labelWidth }
        />
        
        <div class="z-input-control">
          { slots.default?.() }
  
          <FormInputMessages errorMessage={ errorMessageRef.value } />
        </div>
      </div>
    )
  }
})
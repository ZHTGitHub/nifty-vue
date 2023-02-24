import { defineComponent, type Ref } from 'vue'
import FormInputLabel from './FormInputLabel'
import FormInputMessages from './FormInputMessages'
import type { Direction, LabelConfig } from '../types'
import classNames from './classNames'
import { useFormDefaultValue } from './hooks/useForm'
import { useFormRequired, useErrorMessage } from './hooks/useFormValidator'
import type { RuleItem } from './formProps'

interface FormInputProps {
  formId?: string;
  formKey?: string;
  capsule?: boolean;
  componentName: string;
  defaultValue?: any;
  direction?: Direction;
  label?: string | number;
  labelConfig?: LabelConfig;
  required?: boolean;
  rules?: RuleItem[];
  valueRef?: Ref;
}

export default defineComponent({
  setup(props: FormInputProps, { attrs, slots }) {
    const { formId, formKey, capsule, componentName, defaultValue, direction, label, labelConfig, rules, valueRef } = { 
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

    const inputClassName = classNames('z-input', direction, {
      capsule,
      required
    })
  
    return () => (
      <div class={[ inputClassName, {'z-input-error': errorMessageRef.value}]}>
        <FormInputLabel 
          direction={ direction }
          label={ label }
          labelConfig={ labelConfig }
        />
        
        <div class="z-input-control">
          { slots.default?.() }
  
          <FormInputMessages errorMessage={ errorMessageRef.value } />
        </div>
      </div>
    )
  }
})
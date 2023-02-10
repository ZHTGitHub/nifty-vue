import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import { inputProps } from '../formProps'
import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'
import { useFormRequired, useErrorMessage } from '../../../hooks/useFormValidator'

export default defineComponent({
  name: 'ZRadio',

  props: inputProps(),

  setup(props, { attrs }) {

    const valueRef = useFormValue(props.formId, props.formKey)
    
    useFormDefaultValue({
      formId: props.formId, 
      formKey: props.formKey, 
      defaultValue: attrs.defaultValue, 
      valueRef
    })

    const required = useFormRequired(attrs.rules as any[])

    const errorMessageRef = useErrorMessage({
      formId: props.formId, 
      formKey: props.formKey, 
      valueRef, 
      rules: attrs.rules as any[]
    })

    return () => (
      <FormInput
        direction={ props.direction }
        errorMessage={ errorMessageRef.value }
        label={ props.label }
        labelWidth={ props.labelWidth }
        required={ required }
      >
        <a-radio 
          { ...attrs }
          v-model:checked={ valueRef.value }
        >
          <slot></slot>
        </a-radio>
      </FormInput>
    )
  }
})

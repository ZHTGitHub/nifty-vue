import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import { formProps } from '../props'
import { useFormDefaultValue, useFormValue } from '../_utils/useForm'
import { useFormRequired, useErrorMessage } from '../_utils/useFormValidator'

export default defineComponent({
  name: 'ZRadio',

  props: formProps(),

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

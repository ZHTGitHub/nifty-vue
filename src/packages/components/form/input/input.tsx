import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import { capsule } from '../../props'
import { inputProps } from '../formProps'
import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'
import { useFormRequired, useErrorMessage } from '../../../hooks/useFormValidator'

export default defineComponent({
  name: 'ZInput',

  props: {
    ...inputProps(),
    capsule
  },

  setup(props, { attrs }) {
    const valueRef = useFormValue(props.formId, props.formKey)

    useFormDefaultValue({
      formId: props.formId, 
      formKey: props.formKey, 
      defaultValue: props.defaultValue, 
      valueRef
    })

    const required = useFormRequired(props.rules)

    const errorMessageRef = useErrorMessage({
      formId: props.formId, 
      formKey: props.formKey, 
      valueRef, 
      rules: props.rules
    })

    return () => (
      <FormInput
        capsule={ props.capsule }
        direction={ props.direction }
        errorMessage={ errorMessageRef.value }
        label={ props.label }
        labelWidth={ props.labelWidth }
        required={ required }
      >
        <a-input 
          { ...attrs }
          v-model:value={ valueRef.value }
        />
      </FormInput>
    )
  }
})
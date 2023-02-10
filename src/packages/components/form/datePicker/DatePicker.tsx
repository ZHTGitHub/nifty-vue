import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import type { PropType } from 'vue'
import { inputProps } from '../formProps'
import { capsule } from '../../props'
import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'
import { useFormRequired, useErrorMessage } from '../../../hooks/useFormValidator'

export default defineComponent({
  name: 'ZDatePicker',

  props: {
    ...inputProps(),

    capsule,

    placeholder: {
      type: String as PropType<string>,
      default: '选择日期'
    }
  },

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
        capsule={ props.capsule }
        direction={ props.direction }
        errorMessage={ errorMessageRef.value }
        label={ props.label }
        labelWidth={ props.labelWidth }
        required={ required }
      >
        <a-date-picker 
          { ...attrs }
          v-model:value={ valueRef.value }
          placeholder={ props.placeholder }
        />
      </FormInput>
    )
  }
})


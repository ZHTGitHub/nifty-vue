import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import type { PropType } from 'vue'
import { inputProps } from '../formProps'
import { capsule } from '../../props'
import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'
import { useFormRequired, useErrorMessage } from '../../../hooks/useFormValidator'

export default defineComponent({
  name: 'ZRangePicker',

  props: {
    ...inputProps(),

    capsule,

    placeholder: {
      type: [Array, String] as PropType<string[] | string>,
      default: ['开始日期', '结束日期']
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
        <a-range-picker 
          { ...attrs }
          v-model:value={ valueRef.value }
          placeholder={ props.placeholder }
        />
      </FormInput>
    )
  }
})


import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import type { PropType } from 'vue'
import { inputProps } from '../formProps'
import { capsule } from '../../props'
import { useComponentName, useFormValue } from '../../../hooks/useForm'

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
    const componentName = useComponentName()
    const valueRef = useFormValue(props.formId, props.formKey)

    return () => (
      <FormInput
        formId={ props.formId }
        formKey={ props.formKey }
        componentName={ componentName }
        capsule={ props.capsule }
        defaultValue={ props.defaultValue }
        direction={ props.direction }
        label={ props.label }
        labelWidth={ props.labelWidth }
        rules={ props.rules }
        valueRef={ valueRef }
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


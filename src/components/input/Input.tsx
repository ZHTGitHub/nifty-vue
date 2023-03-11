import { defineComponent, type PropType } from 'vue'
import FormInput from '../_util/FormInput'
import { capsule, inputProps } from '../_util/props'
import { useComponentName, useFormValue } from '../_util/hooks/useForm'

export default defineComponent({
  name: 'ZInput',

  props: {
    ...inputProps(),
    
    capsule,

    defaultValue: {
      type: String as PropType<string>
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
        labelConfig={ props.labelConfig }
        rules={ props.rules }
        valueRef={ valueRef }
      >
        <a-input 
          { ...attrs }
          v-model:value={ valueRef.value }
        />
      </FormInput>
    )
  }
})
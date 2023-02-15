import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import { capsule } from '../../props'
import { inputProps } from '../formProps'
import { useComponentName, useFormValue } from '../useForm'

export default defineComponent({
  name: 'ZInput',

  props: {
    ...inputProps(),
    capsule
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
import { defineComponent } from 'vue'
import FormInput from '../_util/FormInput'
import { inputProps } from '../_util/formProps'
import { useComponentName, useFormValue } from '../_util/hooks/useForm'

export default defineComponent({
  name: 'ZSwitch',

  props: inputProps(),

  setup(props, { attrs }) {
    const componentName = useComponentName()
    const valueRef = useFormValue(props.formId, props.formKey)

    return () => (
      <FormInput
        formId={ props.formId }
        formKey={ props.formKey }
        componentName={ componentName }
        defaultValue={ props.defaultValue }
        direction={ props.direction }
        label={ props.label }
        labelConfig={ props.labelConfig }
        rules={ props.rules }
        valueRef={ valueRef }
      >
        <a-switch 
          { ...attrs }
          v-model:checked={ valueRef.value }
        />
      </FormInput>
    )
  }
})
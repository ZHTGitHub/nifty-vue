import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import { inputProps } from '../formProps'
import { useComponentName, useFormValue } from '../../../hooks/useForm'

export default defineComponent({
  name: 'ZCheckbox',

  props: inputProps(),

  setup(props, { attrs, slots }) {
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
        labelWidth={ props.labelWidth }
        rules={ props.rules }
        valueRef={ valueRef }
      >
        <a-checkbox 
          { ...attrs }
          v-model:checked={ valueRef.value }
        >
          { slots.default?.() }
        </a-checkbox>
      </FormInput>
    )
  }
})

  
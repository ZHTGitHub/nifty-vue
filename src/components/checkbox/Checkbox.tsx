import { defineComponent } from 'vue'
import FormInput from '../_util/FormInput'
import { inputProps } from '../_util/formProps'
import { useComponentName, useFormValue } from '../_util/hooks/useForm'

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
        labelConfig={ props.labelConfig }
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

  
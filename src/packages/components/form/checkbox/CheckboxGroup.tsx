import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import { inputProps, inputItemsProps } from '../formProps'
import { useComponentName, useFormValue } from '../useForm'

export default defineComponent({
  name: 'ZCheckboxGroup',

  props: {
    ...inputProps(),
    ...inputItemsProps()
  },

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
        labelWidth={ props.labelWidth }
        rules={ props.rules }
        valueRef={ valueRef }
      >
        <a-checkbox-group 
          { ...attrs }
          v-model:value={ valueRef.value }
          options={ props.items }
        />
      </FormInput>
    )
  }
})
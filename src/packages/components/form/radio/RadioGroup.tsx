import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import { inputProps, inputItemsProps } from '../formProps'
import { useComponentName, useFormValue } from '../../../hooks/useForm'

export default defineComponent({
  name: 'ZRadioGroup',

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
        <a-radio-group 
          { ...attrs }
          v-model:value={ valueRef.value }
        >
          {
            props.items.map(item => (
              <a-radio 
                value={ item[props.itemValue] }
              >{ item[props.itemLabel] }</a-radio>
            ))
          }
        </a-radio-group>
      </FormInput>
    )
  }
})
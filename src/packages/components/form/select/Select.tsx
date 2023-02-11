import { defineComponent } from 'vue'
import FormInput from '../FormInput'
import { inputProps, inputItemsProps } from '../formProps'
import { capsule } from '../../props'
import { useComponentName, useFormValue } from '../../../hooks/useForm'

export default defineComponent({
  name: 'ZSelect',

  props: {
    ...inputProps(),
    ...inputItemsProps(),
    capsule
  },

  setup(props, { attrs }) {
    const componentName = useComponentName()
    const valueRef = useFormValue(props.formId, props.formKey)

    return () => (
      <FormInput
        formId={ props.formId }
        formKey={ props.formKey }
        capsule={ props.capsule }
        class="z-input-select"
        componentName={ componentName }
        defaultValue={ props.defaultValue }
        direction={ props.direction }
        label={ props.label }
        labelWidth={ props.labelWidth }
        rules={ props.rules }
        valueRef={ valueRef }
      >
        <a-select 
          { ...attrs }
          v-model:value={ valueRef.value }
        >
          {
            props.items.map(item => (
              <a-select-option 
                value={ item[props.itemValue] }
              >
                { item[props.itemLabel] }
              </a-select-option>
            ))
          }
        </a-select>
      </FormInput>
    )
  }
}) 
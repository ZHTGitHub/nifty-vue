import { defineComponent } from 'vue'
import FormInput from '../_util/FormInput'
import { capsule, inputProps, inputItemsProps } from '../_util/props'
import { useComponentName, useFormValue } from '../_util/hooks/useForm'

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
        labelConfig={ props.labelConfig }
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
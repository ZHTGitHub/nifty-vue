import { defineComponent, ref } from 'vue'
import FormInput from '../FormInput'
import { inputProps, inputItemsProps } from '../formProps'
import { defaultGroupConfig } from '../../default'
import { groupConfig } from '../../props'
import type { GroupConfig } from '../../types'
import { useComponentName, useFormValue } from '../useForm'

export default defineComponent({
  name: 'ZRadioGroup',

  props: {
    ...inputProps(),
    ...inputItemsProps(),
    groupConfig
  },

  setup(props, { attrs }) {
    const componentName = useComponentName()
    const valueRef = useFormValue(props.formId, props.formKey)

    const groupConfig = ref<GroupConfig>({ ...defaultGroupConfig, ...props.groupConfig })
    
    return () => (
      <FormInput
        formId={ props.formId }
        formKey={ props.formKey }
        class={ `z-input-group ${ groupConfig.value.direction }` }
        componentName={ componentName }
        defaultValue={ props.defaultValue }
        direction={ props.direction }
        label={ props.label }
        labelConfig={ props.labelConfig }
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
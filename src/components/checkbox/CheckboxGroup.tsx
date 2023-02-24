import { defineComponent, ref } from 'vue'
import FormInput from '../_util/FormInput'
import { inputProps, inputItemsProps } from '../_util/formProps'
import { defaultGroupConfig } from '../default'
import { groupConfig } from '../props'
import type { GroupConfig } from '../types'
import { useComponentName, useFormValue } from '../_util/hooks/useForm'

export default defineComponent({
  name: 'ZCheckboxGroup',

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
        <a-checkbox-group 
          { ...attrs }
          v-model:value={ valueRef.value }
          options={ props.items }
        />
      </FormInput>
    )
  }
})
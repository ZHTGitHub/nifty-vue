import { defineComponent } from 'vue'
import FormInput from '../_util/FormInput'
import type { PropType } from 'vue'
import { capsule, inputProps } from '../_util/props'
import { useComponentName, useFormValue } from '../_util/hooks/useForm'

export default defineComponent({
  name: 'ZRangePicker',

  props: {
    ...inputProps(),

    capsule,

    defaultValue: {
      type: Array as PropType<string[]>
    },

    placeholder: {
      type: [Array, String] as PropType<string[] | string>,
      default: ['开始日期', '结束日期']
    }
  },

  setup(props, { attrs }) {
    const componentName = useComponentName()
    const valueRef = useFormValue(props.formId, props.formKey)

    return () => (
      <FormInput
        formId={ props.formId }
        formKey={ props.formKey }
        capsule={ props.capsule }
        componentName={ componentName }
        defaultValue={ props.defaultValue }
        direction={ props.direction }
        label={ props.label }
        labelConfig={ props.labelConfig }
        rules={ props.rules }
        valueRef={ valueRef }
      >
        <a-range-picker 
          { ...attrs }
          v-model:value={ valueRef.value }
          placeholder={ props.placeholder }
        />
      </FormInput>
    )
  }
})


import { ref, defineComponent } from 'vue'
import FormInput from '../FormInput'
import type { PropType } from 'vue'
import type { UploadProps } from 'ant-design-vue'
import { inputProps } from '../formProps'
import { useComponentName, useFormValue } from '../useForm'

export default defineComponent({
  name: 'ZUpload',

  props: {
    ...inputProps(),

    listType: {
      type: String as PropType<'picture' | 'picture-card' | 'text'>,
      default: 'picture-card'
    }
  },

  setup(props, { attrs, slots }) {
    const fileList = ref<UploadProps[]>([])

    const componentName = useComponentName()
    const valueRef = useFormValue(props.formId, props.formKey)

    return () => (
      <FormInput
        formId={ props.formId }
        formKey={ props.formKey }
        componentName={ componentName }
        direction={ props.direction }
        label={ props.label }
        labelWidth={ props.labelWidth }
        rules={ props.rules }
        valueRef={ valueRef }
      >
        <a-upload 
          { ...attrs }
          v-model:file-list={ fileList.value }
          listType={ props.listType }
        >
          { slots.default?.() }
        </a-upload>
      </FormInput>
    )
  }
})


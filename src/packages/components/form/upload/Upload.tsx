import { ref, defineComponent } from 'vue'
import FormInput from '../FormInput'
import type { PropType } from 'vue'
import type { UploadProps } from 'ant-design-vue'
import { inputProps } from '../formProps'
import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'
import { useFormRequired, useErrorMessage } from '../../../hooks/useFormValidator'

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

    const valueRef = useFormValue(props.formId, props.formKey)

    useFormDefaultValue({
      formId: props.formId, 
      formKey: props.formKey, 
      defaultValue: props.defaultValue, 
      valueRef
    })

    const required = useFormRequired(props.rules)

    const errorMessageRef = useErrorMessage({
      formId: props.formId, 
      formKey: props.formKey, 
      valueRef, 
      rules: props.rules as any[]
    })

    return () => (
      <FormInput
        direction={ props.direction }
        errorMessage={ errorMessageRef.value }
        label={ props.label }
        labelWidth={ props.labelWidth }
        required={ required }
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


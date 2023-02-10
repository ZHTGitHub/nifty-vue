import { useAttrs, ref, shallowRef, watch, defineComponent, onBeforeUnmount } from 'vue'
import FormInput from '../FormInput'
import type { PropType, Ref } from 'vue'
import { inputProps } from '../formProps'
import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'
import { useFormRequired, useErrorMessage } from '../../../hooks/useFormValidator'
import type { IDomEditor } from '@wangeditor/editor'
import { Toolbar, Editor } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'

export default defineComponent({
  name: 'ZEditor',

  components: {
    Toolbar,
    Editor
  },

  props: {
    ...inputProps(),

    autofocus: {
      type: Boolean as PropType<boolean>,
      default: false
    },

    mode: {
      type: String as PropType<'default' | 'simple'>,
      default: 'default'
    },

    placeholder: {
      type: String as PropType<string>
    },

    readonly: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },

  setup(props) {
    const editorRef = shallowRef()

    onBeforeUnmount(() => {
      editorRef.value?.destroy()
    })

    const attrs = useAttrs()

    const value = useFormValue(props.formId, props.formKey)

    const valueHtml = ref<Ref>(value)

    const editorConfig = {
      autoFocus: props.autofocus,
      placeholder: props.placeholder,
      readOnly: props.readonly
    }

    const handleCreated = (editor: IDomEditor) => {
      editorRef.value = editor 
    }

    const handleChange = () => {
      const text = editorRef.value.getText()
      const html = editorRef.value.getHtml()
      value.value = text ? html : text
      console.log(value.value)
    }

    const handleBlur = () => {
      console.log('blur')
    }

    watch(() => value.value, (val) => {
      valueHtml.value = val

      if(val === void 0) {
        editorRef.value.clear()
      }
    })

    useFormDefaultValue({
      formId: props.formId, 
      formKey: props.formKey, 
      defaultValue: attrs.defaultValue, 
      valueRef: value
    })

    const required = useFormRequired(attrs.rules as any[])

    const errorMessageRef = useErrorMessage({
      formId: props.formId, 
      formKey: props.formKey, 
      valueRef: value, 
      rules: attrs.rules as any[]
    })

    return () => (
      <FormInput
        class="z-input-editor"
        direction={ props.direction }
        errorMessage={ errorMessageRef.value }
        label={ props.label }
        labelWidth={ props.labelWidth }
        required={ required }
      >
        <div class="editor">
          <Toolbar
            class="editor-toolbar"
            editor={ editorRef.value }
            defaultConfig={{}}
            mode={ props.mode }
          />

          <Editor
            class="editor-container"
            defaultConfig={ editorConfig }
            mode={ props.mode }
            v-model={ valueHtml.value }
            onOnCreated={ handleCreated }
            onOnChange={ handleChange }
            onOnBlur={ handleBlur }
          />
        </div>
      </FormInput>
    )
  }
})


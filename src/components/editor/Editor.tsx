import { ref, shallowRef, watch, defineComponent, onBeforeUnmount } from 'vue'
import FormInput from '../_util/FormInput'
import type { PropType, Ref } from 'vue'
import { inputProps } from '../_util/props'
import { useComponentName, useFormValue } from '../_util/hooks/useForm'
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

    const componentName = useComponentName()
    const valueRef = useFormValue(props.formId, props.formKey)

    const valueHtml = ref<Ref>(valueRef)

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
      valueRef.value = text ? html : text
    }

    const handleBlur = () => {
      console.log('blur')
    }

    watch(() => valueRef.value, (val) => {
      valueHtml.value = val

      if(val === void 0) {
        editorRef.value.clear()
      }
    })

    return () => (
      <FormInput
        formId={ props.formId }
        formKey={ props.formKey }
        class="z-input-editor"
        componentName={ componentName }
        defaultValue={ props.defaultValue }
        direction={ props.direction }
        label={ props.label }
        labelConfig={ props.labelConfig }
        rules={ props.rules }
        valueRef={ valueRef }
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


import { 
  ref, 
  shallowRef, 
  watch, 
  defineComponent, 
  onBeforeUnmount,
} from 'vue'
import FormInput from '../_util/FormInput'
import type { PropType, Ref } from 'vue'
import { inputProps } from '../_util/props'
import { useComponentName, useFormValue } from '../_util/hooks/useForm'
import { DomEditor } from '@wangeditor/editor'
import type { IDomEditor, IToolbarConfig } from '@wangeditor/editor'
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

    defaultValue: {
      type: String as PropType<string>
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
    },

    toolbarConfig: {
      type: Object as PropType<any>,
      default: () => ({})
    },
  },

  emits: ['created', 'change', 'blur'],

  setup(props, { emit }) {
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

    const editorCreated = (editor: IDomEditor) => {
      editorRef.value = editor 
      emit('created', editorRef.value)
    }

    const editorChange = () => {
      const text = editorRef.value.getText()
      const html = editorRef.value.getHtml()
      valueRef.value = text ? html : text
      emit('change', valueRef.value)
    }

    const editorBlur = () => {
      emit('blur', valueRef.value)
    }

    watch(() => valueRef.value, (val) => {
      valueHtml.value = val

      if(val === void 0) {
        editorRef.value.clear()
      }
    })

    return () => {
      const { 
        formId, 
        formKey, 
        defaultValue, 
        direction, 
        label, 
        labelConfig, 
        mode, 
        rules, 
        toolbarConfig,
        ...rest 
      } = props

      return (
        <FormInput
          formId={ formId }
          formKey={ formKey }
          class="z-input-editor"
          componentName={ componentName }
          defaultValue={ defaultValue }
          direction={ direction }
          label={ label }
          labelConfig={ labelConfig }
          rules={ rules }
          valueRef={ valueRef }
        >
          <div class="editor">
            <Toolbar
              class="editor-toolbar"
              editor={ editorRef.value }
              defaultConfig={ toolbarConfig }
              mode={ mode }
            />
  
            <Editor
              class="editor-container"
              defaultConfig={ editorConfig }
              mode={ mode }
              v-model={ valueHtml.value }
              onOnCreated={ editorCreated }
              onOnChange={ editorChange }
              onOnBlur={ editorBlur }
              { ...rest }
            />
          </div>
        </FormInput>
      )
    }
  }
})


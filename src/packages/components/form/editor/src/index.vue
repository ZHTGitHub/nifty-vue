<script lang="ts">
  import '@wangeditor/editor/dist/css/style.css'
  import { useAttrs, ref, shallowRef, watch, defineComponent, onBeforeUnmount, nextTick } from 'vue'
  import type { PropType, Ref } from 'vue'
  import { formProps } from '../../props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'
  import type { IDomEditor } from '@wangeditor/editor'
  import { Toolbar, Editor } from '@wangeditor/editor-for-vue'

  export default defineComponent({
    name: 'ZEditor',

    props: {
      ...formProps(),

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

      const handleCreated = (editor: IDomEditor) => {
        editorRef.value = editor 
      }

      const handleChange = () => {
        const text = editorRef.value.getText()
        const html = editorRef.value.getHtml()
        value.value = text ? html : text
      }

      const handleBlur = () => {
        console.log('blur')
      }

      watch(() => value.value, (val) => {
        valueHtml.value = val

        if(val === void 0) {
          editorRef.value.clear()
        }

        console.log(valueHtml.value)
      })

      useFormDefaultValue({
        formId: props.formId, 
        formKey: props.formKey, 
        defaultValue: attrs.defaultValue, 
        valueRef: value
      })

      const required = useFormRequired(attrs.rules as any[])

      const errorMessage = useErrorMessage({
        formId: props.formId, 
        formKey: props.formKey, 
        valueRef: value, 
        rules: attrs.rules as any[]
      })

      return {
        editorRef,
        valueHtml,
        handleCreated,
        handleChange,
        handleBlur,
        value,
        required,
        errorMessage
      }
    },

    components: {
      Toolbar,
      Editor
    }
  })
</script>

<template>
  <div 
    class="z-input z-input-editor"
    :class="{ 
      horizontal: direction === 'horizontal',
      required,
      'z-input-error': !!errorMessage
    }"
  >
    <label 
      class="z-input-label" 
      :class="{ mr2: !label }"
      :style="{
        width: `${ labelWidth }px`
      }"
    >
      {{ label }}
    </label>

    <div class="z-input-control">
      <div class="editor">
        <Toolbar
          class="editor-toolbar"
          :editor="editorRef"
          :defaultConfig="{}"
          :mode="mode"
        />

        <Editor
          class="editor-container"
          :defaultConfig="{ 
            autoFocus: autofocus,
            placeholder,
            readOnly: readonly
          }"
          :mode="mode"
          v-model="valueHtml"
          @onCreated="handleCreated"
          @onChange="handleChange"
          @onBlur="handleBlur"
        />
      </div>
      
      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .z-input-editor {
    .z-input-control {
      .editor {
        border: 1px solid #d9d9d9;

        .editor-toolbar {
          border-bottom: 1px solid #d9d9d9;
        }

        .editor-container {
          overflow: hidden;
          height: 360px !important;
        }
      }
    }
  }
</style>
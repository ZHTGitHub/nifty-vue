<script lang="ts">
  import '@wangeditor/editor/dist/css/style.css'
  import { useAttrs, shallowRef, defineComponent } from 'vue'
  import fromProps from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'
  import { Toolbar, Editor } from '@wangeditor/editor-for-vue'

  export default defineComponent({
    name: 'ZEditor',

    props: fromProps(),

    setup(props) {
      const editorRef = shallowRef()

      const handleCreated = (editor: object) => {
        // console.log('created', editor)
        editorRef.value = editor // 记录 editor 实例，重要！
      }

      const attrs = useAttrs()

      const value = useFormValue(props.formId, props.formKey)

      useFormDefaultValue({
        formId: props.formId, 
        formKey: props.formKey, 
        defaultValue: attrs.defaultValue, 
        value
      })

      const required = useFormRequired(attrs.rules as any[])

      const errorMessage = useErrorMessage({
        formId: props.formId, 
        formKey: props.formKey, 
        value, 
        rules: attrs.rules as any[]
      })

      return {
        editorRef,
        handleCreated,
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
    <label class="z-input-label" :class="{ mr0: !label }">
      {{ label }}
    </label>

    <div class="z-input-control">
      <div class="editor">
        <Toolbar
          class="editor-toolbar"
          :editor="editorRef"
          :defaultConfig="{}"
          mode="default"
        />

        <Editor
          class="editor-container"
          :defaultConfig="{ placeholder: '请输入内容...' }"
          mode="default"
          v-model="value"
          @onCreated="handleCreated"
        />
      </div>
      
      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/components/style.scss";
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
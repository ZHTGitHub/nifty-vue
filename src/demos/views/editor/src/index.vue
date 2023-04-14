<script lang="ts" setup>
  import { ref } from 'vue'
  const formId = ref<string>('Editor')

  const editorCreated = (value: any) => {
    console.log(value)
  }

  const editorChange = (value: any) => {
    console.log(value)
  }

  const editorBlur = (value: any) => {
    console.log(value)
  }
</script>

<template>
  <div class="demo">
    <div class="pt-3 pb-1 px-4 bg-white">
      <h4 class="text-h4">Editor 富文本框</h4>
    </div>

    <div class="pa-4">
      <z-editor 
        :formId="formId"
        formKey="content"
        :toolbarConfig="{
          excludeKeys: [
            'blockquote',
            'fontFamily',
            'bulletedList',
            'numberedList',
            'todo',
            'emotion',
            'insertLink',
            'insertImage',
            'uploadImage',
            'insertVideo',
            'uploadVideo',
            'insertTable',
            'code',
            'codeBlock',
            'divider',
            'undo',
            'redo',
            'fullScreen',
          ]
        }"
        @created="editorCreated"
        @change="editorChange"
        @blur="editorBlur"
      />
    </div>
  </div>
</template>
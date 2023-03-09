<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import type { VNodeRef } from 'vue'
  import { ComponentDemo } from '@/demos/components'
  import { dialogFields } from '../cells'
  const formId = ref<string>('dialogProfile')
  const dialog = ref<VNodeRef>('')
  let defaultValues = reactive<any>({
    name: 'Leslie'
  })

  const openDialog = () => {
    dialog.value.onOpen()
  }

  const submitDialogForm = ({ error, form }) => {
    console.log({ error, form })
  }
</script>

<template>
  <component-demo
    title="弹窗表单"
    description="表单在对话框中使用。"
  >
    <z-btn 
      @click="openDialog"
    >Open</z-btn>

    <z-dialog 
      ref="dialog"
      title="个人信息"
      type="form"
      @confirm="submitDialogForm"
    >
      <z-form 
        :formId="formId"
        :fields="dialogFields"
        :defaultValues="defaultValues"
        :config="{
          label: {
            width: '80px'
          },
          group: {
            
          }
        }"
      >
      </z-form>
    </z-dialog>
  </component-demo>
</template>
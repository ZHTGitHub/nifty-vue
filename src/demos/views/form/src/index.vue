<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import type { VNodeRef } from 'vue'
  import { fields } from './cells'

  const dialog = ref<VNodeRef>('')
  const formId = ref<string>('profile')
  // const defaultValues = ref<any>({})
  let defaultValues = reactive<any>({})

  const openAddDialog = () => {
    defaultValues = { name: 'Leslie', desc: 'Good boy' }
    dialog.value.onOpen()
  }

  const openEditDialog = () => {
    defaultValues = { name: 'ZHT', desc: 'Good man' }
    dialog.value.onOpen()
  }

  const submitForm = ({ error, form }) => {
    console.log(error, form)
  }
</script>

<template>
  <div class="demo">
    <z-btn @click="openAddDialog">打开</z-btn>
    <z-btn @click="openEditDialog">打开</z-btn>

    <z-dialog 
      ref="dialog"
      title="个人中心"
      type="form"
      @confirm="submitForm"
    >
      <z-form 
        :formId="formId"
        :fields="fields"
        :defaultValues="defaultValues"
      >
        <template #tail>
          <z-input 
            :formId="formId" 
            formKey="desc"  
            label="描述"
            :defaultValue="defaultValues.desc"
          />
        </template>
      </z-form>
    </z-dialog>
  </div>
</template>
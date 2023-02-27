<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import type { VNodeRef } from 'vue'
  import { fields } from './cells'

  const dialog = ref<VNodeRef>('')
  const formId = ref<string>('profile')
  const defaultValues = ref<any>({})
  // let defaultValues = reactive<any>({})

  const openAddDialog = () => {
    defaultValues.value = { name: 'Leslie', desc: 'Good boy' }
    // defaultValues.value.name = 'Leslie'
    // defaultValues.value.desc = 'Good boy'
    dialog.value.onOpen()
  }

  const openEditDialog = () => {
    defaultValues.value = { name: 'ZHT', desc: 'Good man' }
    // defaultValues.value.name = 'ZHT'
    // defaultValues.value.desc = 'Good man'
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
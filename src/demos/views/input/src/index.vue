<script lang="ts" setup>
  import { ref } from 'vue'
  const formId = ref<string>('Input')

</script>

<template>
  <div class="demo">
    <div class="pt-3 pb-1 px-4 bg-white">
      <h4 class="text-h4">Input 输入框</h4>
    </div>

    <div class="pa-4">
      <z-input 
        :formId="formId"
        formKey="username"
      />
    </div>
  </div>
</template>
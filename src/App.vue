<script setup lang="ts">
  import useFormStore from './store/form'

  const formStore = useFormStore()

  const handleConfirm = (event: Event) => {
    console.log(formStore.forms.login)
  }
</script>

<template>
  <z-input label="姓名" placeholder="请输入姓名" form-id="login" form-key="name"/>
  <z-input label="性别" placeholder="请输入姓名" form-id="login" form-key="gender"/>
  <z-btn>提交</z-btn>
</template>

<style scoped>
</style>

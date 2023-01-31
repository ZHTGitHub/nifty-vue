<script setup lang="ts">
  import textField from './components/textField'
  import btn from './components/button'
  import useFormStore from './store/form'

  const formStore = useFormStore()

  const handleConfirm = (event: Event) => {
    console.log(formStore.forms.login)
  }
</script>

<template>
  <textField label="姓名" placeholder="请输入姓名" form-id="login" form-key="name"/>
  <textField label="性别" placeholder="请输入姓名" form-id="login" form-key="gender"/>
  <btn @click="handleConfirm">确认</btn>
</template>

<style scoped>
</style>

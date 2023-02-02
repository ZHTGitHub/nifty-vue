<script setup lang="ts">
  import useFormStore from './store/form'

  const formStore = useFormStore()

  const handleConfirm = () => {
    console.log(formStore.forms.login)
  }
</script>

<template>
  <z-input 
    form-id="login" 
    form-key="name"
    defaultValue="Leslie"
    label="姓名"
    placeholder="请输入姓名" 
  />
  <br />
  <br />
  <z-select 
    form-id="login" 
    form-key="country" 
    defaultValue="jp"
    label="国家"
    :items="[
      { label: 'China', value: 'cn' }, 
      { label: 'Japan', value: 'jp' }
    ]"
    placeholder="请选择国家" 
  />
  <br />
  <br />
  <z-switch 
    :defaultValue="true"
    form-id="login" 
    form-key="gender"
  />
  <br />
  <br />
  <z-checkbox 
    :defaultValue="true"
    form-id="login" 
    form-key="checkbox"
  >Checkbox</z-checkbox>
  <br />
  <br />
  <z-checkbox-group 
    :defaultValue="['jp']"
    form-id="login" 
    form-key="checkboxGroup" 
    :items="[
      { label: 'China', value: 'cn' }, 
      { label: 'Japan', value: 'jp' }
    ]">checkboxGroup</z-checkbox-group>
  <br />
  <br />
  <z-radio 
    :defaultValue="true"
    form-id="login"
    form-key="radio"
  >Radio</z-radio>
  <br />
  <br />
  <z-radio-group 
    :defaultValue="'cn'"
    form-id="login" 
    form-key="radioGroup" 
    :items="[
      { label: 'China', value: 'cn' }, 
      { label: 'Japan', value: 'jp' }
    ]"></z-radio-group>
  <br />
  <br />
  <z-btn @click="handleConfirm">提交</z-btn>
</template>

<style scoped>
</style>

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
    form-key="input"
    defaultValue="input"
    label="Input"
  />
  <br />
  <br />
  <z-select 
    form-id="login" 
    form-key="select" 
    defaultValue="1"
    label="Select"
    :items="[
      { label: 'select1', value: '1' }, 
      { label: 'select2', value: '2' }
    ]"
    placeholder="请选择国家" 
  />
  <br />
  <br />
  <z-switch 
    :defaultValue="true"
    label="Switch"
    form-id="login" 
    form-key="switch"
  />
  <br />
  <br />
  <z-checkbox 
    label="Checkbox"
    form-id="login" 
    form-key="checkbox"
  >Checkbox</z-checkbox>
  <br />
  <br />
  <z-checkbox-group 
    :defaultValue="[1]"
    label="CheckboxGroup"
    form-id="login" 
    form-key="checkboxGroup" 
    :items="[
      { label: 'group1', value: 1 }, 
      { label: 'group2', value: 2 }
    ]">checkboxGroup</z-checkbox-group>
  <br />
  <br />
  <z-radio 
    label="Radio"
    form-id="login"
    form-key="radio"
  >Radio</z-radio>
  <br />
  <br />
  <z-radio-group 
    :defaultValue="2"
    label="RadioGroup"
    form-id="login" 
    form-key="radioGroup" 
    :items="[
      { label: 'group1', value: 1 }, 
      { label: 'group2', value: 2 }
    ]"></z-radio-group>
  <br />
  <br />
  <z-btn @click="handleConfirm">提交</z-btn>
</template>

<style scoped>
</style>

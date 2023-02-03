<script setup lang="ts">
  import type { message } from 'ant-design-vue';
import useFormStore from './components/form/_utils/formStore'

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
    :rules="[
      { name: 'required', message: '当前字段为必填项' },
      { name: 'alpha', message: '当前字段只能为英文字母' },
      { name: 'min', value: 4, message: '当前字段最小长度为4' },
      { name: 'max', value: 16, message: '当前字段最大长度为16' },
      { name: 'excluded', value: ['fuck', 'shit'], message: '不能包含fuck、shit.' }
    ]"
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
    :rules="[
      { required: true, message: '当前字段为必填项' }
    ]"
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
  <z-date-picker 
    label="DatePicker" 
    form-id="login" 
    form-key="datePicker" 
    format="YYYY/MM/DD"
  />
  <br />
  <br />
  <z-range-picker 
    label="RangePicker" 
    form-id="login" 
    form-key="rangePicker" 
    format="YYYY/MM/DD"
  />
  <br />
  <br />
  <z-btn @click="handleConfirm">提交</z-btn>
</template>

<style scoped>
</style>

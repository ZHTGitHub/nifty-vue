<script setup lang="ts">
  import { ref } from 'vue'
  import useFormStore from './components/form/_utils/formStore'

  const formStore = useFormStore()

  const formId = ref('login')

  const handleConfirm = ({ error }: { event: Event, error: Boolean }) => {
    // console.log(formStore.forms[formId.value])
    console.log(error)
  }
</script>

<template>
  <z-input 
    :formId="formId" 
    formKey="name"
    label="姓名"
    :rules="[
      { name: 'required', message: '当前字段为必填项' },
      { name: 'alpha', message: '当前字段只能为英文字母' },
      { name: 'min', value: 4, message: '当前字段最小长度为4' },
      { name: 'max', value: 8, message: '当前字段最大长度为8' },
      { name: 'excluded', value: ['fuck', 'shit'], message: '不能包含fuck、shit.' }
    ]"
  />
  <br />
  <br />
  <z-select 
    :formId="formId" 
    formKey="country" 
    label="国家"
    :items="[
      { label: '美国', value: '1' }, 
      { label: '日本', value: '2' }
    ]"
    placeholder="请选择国家" 
    :rules="[
      { name: 'required', message: '请选择国家' }
    ]"
  />
  <br />
  <br />
  <z-switch 
    :formId="formId" 
    formKey="switch"
    label="记住"
    :rules="[
      { name: 'required', message: '请勾选记住' }
    ]"
  />
  <br />
  <br />
  <z-checkbox 
    :formId="formId" 
    formKey="checkbox"
    :rules="[
      { name: 'required', message: '请勾选记住密码' }
    ]"
  >记住密码</z-checkbox>
  <br />
  <br />
  <z-checkbox-group 
    label="水果"
    :formId="formId" 
    formKey="fruit" 
    :items="[
      { label: '苹果', value: 1 }, 
      { label: '香蕉', value: 2 }
    ]"
    :rules="[
      { name: 'required', message: '请勾选记住水果' }
    ]"
  ></z-checkbox-group>
  <br />
  <br />
  <z-radio 
    :formId="formId"
    formKey="radio"
    :rules="[
      { name: 'required', message: '请勾选记住' }
    ]"
  >记住</z-radio>
  <br />
  <br />
  <z-radio-group 
    :formId="formId" 
    formKey="radioGroup" 
    label="性别"
    :items="[
      { label: '男', value: 1 }, 
      { label: '女', value: 2 }
    ]"
    :rules="[
      { name: 'required', message: '请选择性别' }
    ]"
  ></z-radio-group>
  <br />
  <br />
  <z-date-picker 
    label="日期" 
    :formId="formId" 
    formKey="date" 
    format="YYYY/MM/DD"
    :rules="[
      { name: 'required', message: '请选择日期' }
    ]"
  />
  <br />
  <br />
  <z-range-picker 
    :formId="formId" 
    formKey="range" 
    format="YYYY/MM/DD"
    label="日期范围" 
    :rules="[
      { name: 'required', message: '请选择日期范围' }
    ]"
  />
  <br />
  <br />
  <z-btn 
    :formId="formId" 
    btnType="validate"
    @click="handleConfirm"
  >提交</z-btn>
</template>

<style scoped>
</style>

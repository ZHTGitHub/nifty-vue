<script setup lang="ts">
  import { ref, getCurrentInstance } from 'vue'
  import dayjs from 'dayjs'
  import { useFormStore } from './packages/store'

  const { proxy } = getCurrentInstance()
  const formStore = useFormStore()
  const formId = ref('login')

  const handleConfirm = ({ error, form }: { event: Event, error: Boolean, form: object }) => {
    // console.log(formStore.forms[formId.value])
    console.log({ error, form })
  }

  const handleOpen = () => {
    // proxy.$popup({
    //   title: '删除警告',
    //   content: '这里是文本内容!',
    //   type: 'error',
    //   cancel() {
    //     console.log('cancel')
    //   },

    //   confirm() {
    //     console.log('confirm')
    //   }
    // })
  }
</script>

<template>
  <div style="margin: 16px;">
    <!-- <z-upload 
      label="头像"
      :rules="[
        { name: 'required', message: '请上传头像' }
      ]"
    >
      上传
    </z-upload> -->
    <br />
    <z-input 
      :formId="formId" 
      formKey="name"
      capsule
      label="姓名"
      :rules="[
        { name: 'required', message: '姓名不能为空' }
      ]"
      defaultValue="leslie"
    />
    <br />
    <z-select 
      :formId="formId" 
      formKey="country" 
      label="国家"
      capsule
      allowClear
      :items="[
        { name: '美国', val: 1 }, 
        { name: '日本', val: 2 }
      ]"
      itemLabel="name"
      itemValue="val"
      placeholder="请选择国家" 
      :rules="[
        { name: 'required', message: '请选择国家' }
      ]"
      :defaultValue="2"
    />
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
    <z-checkbox 
      :formId="formId" 
      formKey="checkbox"
      :rules="[
        { name: 'required', message: '请勾选记住密码' }
      ]"
      :defaultValue="true"
    >记住密码</z-checkbox>
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
      :defaultValue="[2]"
    ></z-checkbox-group>
    <br />
     <z-radio 
      :formId="formId"
      formKey="radio"
      label="记住"
      :rules="[
        { name: 'required', message: '请勾选记住' }
      ]"
      :defaultValue="true"
    >记住</z-radio>
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
      :defaultValue="1"
    ></z-radio-group>
    <br />
    <z-date-picker 
      label="日期" 
      :formId="formId" 
      formKey="date" 
      format="YYYY/MM/DD"
      :rules="[
        { name: 'required', message: '请选择日期' }
      ]"
      :defaultValue="dayjs('2023/02/05', 'YYYY-MM-DD')"
    />
    <br />
    <z-range-picker 
      :formId="formId" 
      formKey="range" 
      format="YYYY/MM/DD"
      label="日期范围" 
      :rules="[
        { name: 'required', message: '请选择日期范围' }
      ]"
      :defaultValue="[dayjs('2023/02/05', 'YYYY-MM-DD'), dayjs('2023/02/15', 'YYYY-MM-DD')]"
    />
    <br />
    <z-editor
      :formId="formId" 
      formKey="editor" 
      label="文案" 
      :rules="[
        { name: 'required', message: '文案不能为空' }
      ]"
    />
    <br />
    <z-btn 
      :formId="formId" 
      btnType="validate"
      type="primary"
      @click="handleConfirm"
    >提交</z-btn>

    <z-btn 
      :formId="formId" 
      btnType="clear"
      ghost
      type="primary"
    >清空</z-btn>

    <z-btn 
      :formId="formId" 
      btnType="reset"
      ghost
      type="primary"
    >重置</z-btn>

    <z-btn 
      ghost
      type="primary"
      @click="handleOpen"
    >打开</z-btn>
  </div>
</template>

<style scoped>
</style>

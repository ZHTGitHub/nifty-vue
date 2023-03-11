<script lang="ts" setup>
  import { ref } from 'vue'
  import { ComponentDemo } from '@/demos/components'
  import { fields } from '../cells'


  const formId = ref<string>('basicProfile')
  const defaultValues = ref<object>({
    country: '1',
    switch: true
  })

  const submitForm = ({ error, form }) => {
    console.log({ error, form })
  }
</script>

<template>
  <component-demo
    title="基本使用"
    description="基本的表单数据域控制展示，包含布局、初始化、验证、提交。"
  >
    <a-row>
      <a-col :xl="12" :md="16" :sm="24">
        <z-form 
          :formId="formId"
          :fields="fields" 
          :defaultValues="defaultValues"
          :config="{
            col: {
              span: 24
            },
            label: {
              width: '85px'
            }
          }"
        >
          <template #tail>
            <a-col span="24" style="padding-left: 85px;">
              <z-btn 
                :formId="formId"
                btnType="validate"
                type="primary"
                @click="submitForm"
              >Submit</z-btn>

              <z-btn 
                :formId="formId"
                btnType="reset"
                class="ml-1"
              >Reset</z-btn>

              <z-btn 
                :formId="formId"
                btnType="clear"
                class="ml-1"
              >Clear</z-btn>
            </a-col>
          </template>
        </z-form>
      </a-col>
    </a-row>
  </component-demo>
</template>
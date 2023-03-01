<script lang="ts" setup>
  import { ref } from 'vue'
  import { ComponentDemo } from '@/demos/components'
  import { layoutFields } from '../cells'
  const formId = ref<string>('layoutProfile')
  const mode = ref('horizontal')

  const changeLayout = (event: { target: HTMLInputElement }) => {
    mode.value = event.target.value
  }
</script>

<template>
  <component-demo
    title="表单布局"
    description="表单的三种布局方式。"
  >
    <a-radio-group 
      v-model:value="mode" 
      :style="{ marginBottom: '24px' }"
      @change="changeLayout"
    >
      <a-radio-button value="horizontal">Horizontal</a-radio-button>
      <a-radio-button value="vertical">Vertical</a-radio-button>
      <a-radio-button value="inline">Inline</a-radio-button>
    </a-radio-group>

    <a-row :gutter="[16, 0]">
      <a-col span="8" v-if="mode === 'horizontal'">
        <z-form 
          :formId="formId"
          :col="{
            span: 24
          }"
          direction="horizontal"
          :labelConfig="{
            width: '60px'
          }"
          :fields="layoutFields" 
        >
          <template #tail>
            <a-col span="24" style="padding-left: 68px;">
              <z-btn 
                :formId="formId"
                btnType="validate"
                type="primary"
              >Login</z-btn>
            </a-col>
          </template>
        </z-form>
      </a-col>

      <a-col span="8" v-else-if="mode === 'vertical'">
        <z-form 
          :formId="formId"
          :col="{
            span: 24
          }"
          direction="vertical"
          :fields="layoutFields" 
        >
          <template #tail>
            <a-col span="24">
              <z-btn 
                :formId="formId"
                btnType="validate"
                type="primary"
              >Login</z-btn>
            </a-col>
          </template>
        </z-form>
      </a-col>

      <a-col span="12" v-else>
        <z-form 
          :formId="formId"
          :row="{
            gutter: [16, 0]
          }"
          :col="{
            span: 10
          }"
          direction="vertical"
          :fields="layoutFields" 
        >
          <template #tail>
            <a-col span="4" class="z-flex align-end">
              <z-btn 
                :formId="formId"
                btnType="validate"
                type="primary"
              >Login</z-btn>
            </a-col>
          </template>
        </z-form>
      </a-col>
    </a-row>
  </component-demo>
</template>
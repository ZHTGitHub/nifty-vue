<script setup lang="ts">
  import { ref, getCurrentInstance } from 'vue'
  import { Popup } from './packages'
  import dayjs from 'dayjs'
  import { useFormStore } from './packages/store'

  // const { proxy } = getCurrentInstance()
  const formStore = useFormStore()
  const formId = ref('login')
  const fields = ref<any[]>([
    {
      name: 'checkbox',
      formKey: 'agree',
      label: '同意',
      rules: [
        { name: 'required', message: '请勾选同意' }
      ]
    },

    {
      name: 'checkboxGroup',
      formKey: 'fruit',
      label: '水果',
      items: [
        { label: '苹果', value: 1 }, 
        { label: '香蕉', value: 2 }
      ],
      rules: [
        { name: 'required', message: '请勾选记住水果' }
      ]
    },

    {
      name: 'date',
      formKey: 'date',
      label: '日期',
      format: 'YYYY/MM/DD',
      rules: [
        { name: 'required', message: '请选择日期' }
      ],
      // defaultValue: dayjs('2023/02/05', 'YYYY-MM-DD')
    }, 

    {
      name: 'range',
      formKey: 'range',
      label: '日期范围',
      format: 'YYYY/MM/DD',
      rules: [
        { name: 'required', message: '请选择日期' }
      ],
      // defaultValue: [dayjs('2023/02/05', 'YYYY-MM-DD'), dayjs('2023/02/15', 'YYYY-MM-DD')]
    }, 

    {
      formKey: 'name',
      label: '姓名',
      rules: [
        { name: 'required', message: '姓名不能为空' }
      ]
    },

    {
      name: 'radio',
      formKey: 'memo',
      label: '记住',
      rules: [
        { name: 'required', message: '请勾选记住' }
      ]
    },

    {
      name: 'radioGroup',
      formKey: 'gender',
      label: '性别',
      groupConfig: {
        direction: 'horizontal'
      },
      items: [
        { label: '男', value: 1 }, 
        { label: '女', value: 2 }
      ],
      rules: [
        { name: 'required', message: '请选择性别' }
      ]
    },

    {
      name: 'select',
      formKey: 'country',
      label: '国家',
      items: [
        { name: '美国', val: 1 }, 
        { name: '日本', val: 2 }
      ],
      itemLabel: 'name',
      itemValue: 'val',
      placeholder: '请选择国家',
      rules: [
        { name: 'required', message: '请选择国家' }
      ]
    }, 

    {
      name: 'switch',
      formKey: 'toggle',
      label: '开关',
      rules: [
        { name: 'required', message: '请勾选记住' }
      ]
    },

    // {
    //   name: 'editor',
    //   formKey: 'page',
    //   label: '文案',
    //   rules: [
    //     { name: 'required', message: '文案不能为空' }
    //   ]
    // }
  ])

  const handleConfirm = ({ error, form }: { event: Event, error: Boolean, form: object }) => {
    // console.log(formStore.forms[formId.value])
    console.log({ error, form })
  }

  const modalRef = ref(null)

  const handleOpen = () => {
    // Popup({
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

    modalRef.value.onOpen()
  }

  const handleModalConfirm = ({ error, form }) => {
    // modalRef.value.onClose()
    console.log(error, form)
  }
</script>

<template>
  <div style="margin: 16px;">
    <z-dialog 
      ref="modalRef" 
      type="form"
      title="我是标题" 
      fullscreen
      @confirm="handleModalConfirm"
    >
      <z-form 
        :formId="formId" 
        :fields="fields"
        direction="horizontal"
        disabled
        :row="{
          gutter: [8, 0]
        }"
        :col="{
          span: 20 
        }"
        :groupConfig = "{
          direction: 'vertical'
        }"
        :defaultValues="{
          name: 'leslie',
          date: dayjs('2023/02/05', 'YYYY-MM-DD'),
          range: [dayjs('2023/02/05', 'YYYY-MM-DD'), dayjs('2023/02/15', 'YYYY-MM-DD')]
        }"
      >
        <template #name>
          <a-col>
            zht1
          </a-col>
        </template>
      </z-form>
    </z-dialog>

    <!-- <z-form 
      :formId="formId" 
      :fields="fields"
      :col="{
        span: 8 
      }"
      :defaultValues="{
        name: 'leslie',
        date: dayjs('2023/02/05', 'YYYY-MM-DD'),
        range: [dayjs('2023/02/05', 'YYYY-MM-DD'), dayjs('2023/02/15', 'YYYY-MM-DD')]
      }"
    >
    </z-form> -->

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

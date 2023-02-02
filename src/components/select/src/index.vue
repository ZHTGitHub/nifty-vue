<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'

  const attrs = useAttrs()

  let props = defineProps({
    formId: {
      type: String,
      required: false
    },

    formKey: {
      type: String,
      required: false
    },

    items: {
      type: Array as any,
      default: () => []
    },

    label: {
      type: String,
      default: 'label'
    },

    value: {
      type: String,
      default: 'value'
    }
  })

  const value = useFormValue(props.formId, props.formKey)
  
  useFormDefaultValue(attrs.defaultValue, value)
</script>

<template>
  <a-select v-model:value="value">
    <template 
      v-for="item in items" 
      :key="item[props.value]"
    >
      <a-select-option 
        :value="item[props.value]"
      >
        {{ item[props.label] }}
      </a-select-option>
    </template>
  </a-select>
</template>

<style lang="scss">
  .ant-select-selector {
    border-color: #ff7875 !important;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, .2) !important;
  }
</style>
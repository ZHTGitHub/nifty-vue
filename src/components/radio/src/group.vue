<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'

  const attrs = useAttrs()

  const props = defineProps({
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
  <a-radio-group v-model:value="value">
    <template 
      v-for="item in items" 
      :key="item[props.value]"
    >
      <a-radio :value="item[props.value]">{{ item[props.label] }}</a-radio>
    </template>
  </a-radio-group>
</template>
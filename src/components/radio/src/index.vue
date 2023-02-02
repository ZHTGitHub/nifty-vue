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
    }
  })

  const value = useFormValue(props.formId, props.formKey)
  
  useFormDefaultValue(attrs.defaultValue, value)
</script>

<template>
  <a-radio v-model:checked="value">
    <slot></slot>
  </a-radio>
</template>
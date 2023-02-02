<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import { useFormValue, useFormDefaultValue } from '../../../hooks/useForm'
  
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
    <a-checkbox-group v-model:value="value" :options="props.items" />
</template>
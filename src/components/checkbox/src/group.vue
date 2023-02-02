<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import type { PropType } from 'vue'
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

    itemLabel: {
      type: String,
      default: 'label'
    },

    items: {
      type: Array as PropType<any[]>,
      default: () => []
    },

    itemValue: {
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
<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import type { PropType } from 'vue'
  import { useFormValue, useFormDefaultValue } from '@/hooks/useForm'
  
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

    label: {
      type: String,
      requried: false
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
  <div class="z-input">
    <label class="z-input-label">
      {{ props.label }}
    </label>

    <div class="z-input-control">
      <a-checkbox-group 
        v-model:value="value" 
        :options="props.items" 
      />

      <div class="z-messages">
        <div class="error-message">当前字段为必填项</div>
      </div>
    </div>
  </div>
</template>
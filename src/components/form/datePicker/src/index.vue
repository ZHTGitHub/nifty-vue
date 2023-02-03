<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import fromProps from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  
  const attrs = useAttrs()

  const props = defineProps(fromProps())

  const value = useFormValue(props.formId, props.formKey)

  useFormDefaultValue(attrs.defaultValue, value)
</script>

<template>
  <div class="z-input z-date-picker">
    <label class="z-input-label">
      {{ props.label }}
    </label>

    <div class="z-input-control">
      <a-date-picker 
        v-model:value="value" 
        v-bind="$attrs"
      />

      <div class="z-messages">
        <div class="error-message">当前字段为必填项</div>
      </div>
    </div>
  </div>
</template>
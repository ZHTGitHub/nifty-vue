<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import fromProps from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'
  
  const attrs = useAttrs()

  const props = defineProps(fromProps())

  const value = useFormValue(props.formId, props.formKey)

  useFormDefaultValue(attrs.defaultValue, value)

  const required = useFormRequired(attrs.rules as any[])

  const errorMessage = useErrorMessage({
    formId: props.formId, 
    formKey: props.formKey, 
    value, 
    rules: attrs.rules as any[]
  })
</script>

<template>
  <div 
    class="z-input"
    :class="{ 
      horizontal: direction === 'horizontal',
      required,
      'z-input-error': !!errorMessage
    }"
  >
    <label class="z-input-label">
      {{ props.label }}
    </label>

    <div class="z-input-control">
      <a-switch v-model:checked="value" />

      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/components/style.scss";
</style>
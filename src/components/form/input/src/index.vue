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

  const errorMessage = useErrorMessage(value, attrs.rules as any[])
</script>

<template>
  <div 
    class="z-input" 
    :class="{ 
      horizontal: direction === 'horizontal',
      required
    }"
  >
    <label class="z-input-label">
      {{ label }}
    </label>

    <div class="z-input-control">
      <a-input 
        v-bind="$attrs" 
        v-model:value="value" 
      />
      
      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/components/style.scss";

  input {
    border-color: #ff7875 !important;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, .2) !important;
  }
</style>
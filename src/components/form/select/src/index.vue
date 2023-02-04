<script lang="ts" setup name="ZSelect">
  import { useAttrs } from 'vue'
  import type { PropType } from 'vue'
  import fromProps from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'

  const attrs = useAttrs()

  let props = defineProps({
    ...fromProps(),

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
    class="z-input z-input-select"
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
      <a-select v-model:value="value">
        <template 
          v-for="item in items" 
          :key="item[props.value]"
        >
          <a-select-option 
            :value="item[props.itemValue]"
          >
            {{ item[props.itemLabel] }}
          </a-select-option>
        </template>
      </a-select>

      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/components/style.scss";

  .z-input-select {
    .z-input-control {
      .ant-select {
        width: 100%;
      }
    }
  }
</style>
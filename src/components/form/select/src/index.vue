<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import type { PropType } from 'vue'
  import fromProps from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired } from '../../_utils/useFormValidator'

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
</script>

<template>
  <div 
    class="z-input z-input-select"
    :class="{ 
      horizontal: direction === 'horizontal',
      required
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
        <div class="error-message">当前字段为必填项</div>
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

  :deep(.ant-select-selector) {
    border-color: #ff7875 !important;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, .2) !important;
  }
</style>
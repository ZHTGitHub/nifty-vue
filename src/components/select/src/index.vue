<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import type { PropType } from 'vue'
  import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'

  const attrs = useAttrs()

  let props = defineProps({
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
    <label class="z-form-item-label">
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

<style lang="scss">
  .ant-select-selector {
    border-color: #ff7875 !important;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, .2) !important;
  }
</style>
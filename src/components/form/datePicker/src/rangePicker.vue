<script lang="ts">
  import { useAttrs, defineComponent } from 'vue'
  import type { PropType } from 'vue'
  import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
  import { formProps } from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'

  export default defineComponent({
    name: 'ZRangePicker',

    props: {
      ...formProps(),

      placeholder: {
        type: [Array, String] as PropType<string[] | string>,
        default: ['开始日期', '结束日期']
      }
    },

    setup(props) {
      const attrs = useAttrs()

      const value = useFormValue(props.formId, props.formKey)

      useFormDefaultValue({
        formId: props.formId, 
        formKey: props.formKey, 
        defaultValue: attrs.defaultValue, 
        valueRef: value
      })

      const required = useFormRequired(attrs.rules as any[])

      const errorMessage = useErrorMessage({
        formId: props.formId, 
        formKey: props.formKey, 
        valueRef: value, 
        rules: attrs.rules as any[]
      })

      return {
        value,
        required,
        errorMessage,
        locale
      }
    }
  })
</script>

<template>
  <div 
    class="z-input z-range-picker"
    :class="{ 
      horizontal: direction === 'horizontal',
      required,
      'z-input-error': !!errorMessage
    }"
  >
    <label class="z-input-label" :class="{ mr2: !label }">
      {{ label }}
    </label>

    <div class="z-input-control">
      <a-range-picker 
        v-bind="$attrs"
        v-model:value="value" 
        :placeholder="placeholder"
      />

      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>
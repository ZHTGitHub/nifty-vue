<script lang="ts">
  import { useAttrs, defineComponent } from 'vue'
  import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
  import fromProps from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'

  export default defineComponent({
    name: 'ZDatePicker',

    props: fromProps(),

    setup(props) {
      const attrs = useAttrs()

      const value = useFormValue(props.formId, props.formKey)

      useFormDefaultValue({
        formId: props.formId, 
        formKey: props.formKey, 
        defaultValue: attrs.defaultValue, 
        value
      })

      const required = useFormRequired(attrs.rules as any[])

      const errorMessage = useErrorMessage({
        formId: props.formId, 
        formKey: props.formKey, 
        value, 
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
    class="z-input z-date-picker"
    :class="{ 
      horizontal: direction === 'horizontal',
      required,
      'z-input-error': !!errorMessage
    }"
  >
    <label class="z-input-label" :class="{ mr0: !label }">
      {{ label }}
    </label>

    <div class="z-input-control">
        <a-date-picker 
          v-bind="$attrs"
          v-model:value="value" 
        />

      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>
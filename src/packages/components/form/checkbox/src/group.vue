<script lang="ts">
  import { useAttrs, defineComponent } from 'vue'
  import { formProps, itemsProps } from '../../props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'

  export default defineComponent({
    name: 'ZCheckboxGroup',

    props: {
      ...formProps(),
      ...itemsProps()
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
        errorMessage
      }
    }
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
    <label class="z-input-label" :class="{ mr2: !label }">
      {{ label }}
    </label>

    <div class="z-input-control">
      <a-checkbox-group 
        v-bind="$attrs"
        v-model:value="value" 
        :options="items" 
      />

      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>
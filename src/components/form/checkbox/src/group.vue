<script lang="ts">
  import { useAttrs, defineComponent } from 'vue'
  import type { PropType } from 'vue'
  import fromProps from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'

  export default defineComponent({
    name: 'ZCheckboxGroup',

    props: {
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
    },

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
    <label class="z-input-label" :class="{ mr0: !label }">
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
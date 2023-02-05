<script lang="ts">
  import { useAttrs, defineComponent } from 'vue'
  import { formProps, itemsProps } from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'

  export default defineComponent({
    name: 'ZRadioGroup',

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
      <a-radio-group 
        v-bind="$attrs"
        v-model:value="value"
      >
        <template v-for="item in items" :key="item[itemValue]">
          <a-radio 
            :value="item[itemValue]"
          >{{ item[itemLabel] }}</a-radio>
        </template>
      </a-radio-group>

      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss">
  @import "@/components/style.scss";
</style>
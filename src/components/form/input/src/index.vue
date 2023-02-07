<script lang="ts">
  import { useAttrs, defineComponent } from 'vue'
  import { formProps } from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'
  
  export default defineComponent({
    name: 'ZInput',

    props: formProps(),

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
    <label 
      class="z-input-label" 
      :class="{ mr2: !label }"
      :style="{
        width: `${ labelWidth }px`
      }"
    >
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
</style>
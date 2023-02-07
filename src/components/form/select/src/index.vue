<script lang="ts">
  import { useAttrs, defineComponent } from 'vue'
  import { formProps, itemsProps } from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'

  export default defineComponent({
    name: 'ZSelect',

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
    class="z-input z-input-select"
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
      <a-select 
        v-bind="$attrs"
        v-model:value="value"
      >
        <template 
          v-for="item in items" 
          :key="item[itemValue]"
        >
          <a-select-option 
            :value="item[itemValue]"
          >
            {{ item[itemLabel] }}
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
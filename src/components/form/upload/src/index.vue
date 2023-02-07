<script lang="ts">
  import { useAttrs, ref, defineComponent } from 'vue'
  import type { PropType } from 'vue'
  import type { UploadProps } from 'ant-design-vue'
  import { formProps } from '@/components/form/props'
  import { useFormDefaultValue, useFormValue } from '../../_utils/useForm'
  import { useFormRequired, useErrorMessage } from '../../_utils/useFormValidator'

  export default defineComponent({
    name: 'ZUpload',

    props: {
      ...formProps(),

      listType: {
        type: String as PropType<'picture' | 'picture-card' | 'text'>,
        default: 'picture-card'
      }
    },

    setup(props) {
      const fileList = ref<UploadProps[]>([])

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
        fileList,
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
      <a-upload 
        v-bind="$attrs"
        v-model:file-list="fileList"
        :listType="listType"
      >
        <slot></slot>
      </a-upload>
      
      <div class="z-messages">
        <div class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>
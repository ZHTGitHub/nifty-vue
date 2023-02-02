<script lang="ts" setup>
  import { useAttrs } from 'vue'
  import { useFormDefaultValue, useFormValue } from '../../../hooks/useForm'
  
  const attrs = useAttrs()

  const props = defineProps({
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

    <div class="z-form-item-control">
      <a-input 
        v-bind="$attrs" 
        v-model:value="value" 
      />
      
      <div class="z-messages">
        <div class="error-message">当前字段为必填项</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  input {
    border-color: #ff7875 !important;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, .2) !important;
  }

  .z-input {
    .z-form-item-label {
      &::before {
        content: "*";
        display: inline-block;
        margin-right: 4px;
        font-size: 14px;
        line-height: 1;
        color: #ff4d4f;
      }
    }

    .z-messages {
      font-size: 14px;
      line-height: 1.5715;

      .error-message {
        color: #ff4d4f;
      }
    }
  } 

  
</style>
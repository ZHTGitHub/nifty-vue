<script lang="ts" setup>
  import { watch } from 'vue'
  import useFormStore from '../../../store/form'
  import useValue from '../../../hooks/useForm'

  const formStore = useFormStore()

  const props = defineProps({
    autocomplete: {
      type: String,
      default: 'off'
    },

    autofocus: {
      type: Boolean,
      default: false
    },

    formId: {
      type: String,
      required: false
    },

    formKey: {
      type: String,
      required: false
    },

    id: {
      type: String,
      required: false
    },

    label: {
      type: String,
      required: false
    },

    placeholder: {
      type: String,
      required: false
    },

    type: {
      type: String,
      default: 'text'
    }
  })

  const value = useValue(props.formId, props.formKey)

  watch(() => value.value, (value) => {
    console.log(formStore.forms)
  })
</script>

<template>
  <a-input 
    v-bind="$attrs" 
    v-model:value="value" 
  />
</template>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
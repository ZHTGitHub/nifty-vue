<script lang="ts" setup>
  import { ref, computed, watch } from 'vue'
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
  <a-input v-model:value="value" placeholder="Basic usage" />
  <!-- <div class="z-field__field">
    <input 
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      class="z-field__input"
      :id="id" 
      :placeholder="placeholder"
      required
      :type="type"
      v-model="value"
    >
    <label class="z-label z-field__label" :for="id">{{ label }}</label>
    <hr class="z-field__hr" />
  </div> -->
</template>

<style lang="scss" scoped>
  /* @import "./index.scss"; */
</style>
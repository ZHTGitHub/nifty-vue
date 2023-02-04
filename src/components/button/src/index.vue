<script lang="ts" setup>
  import useFormStore from '@/components/form/_utils/formStore'
  import { buttonProps } from './types'
  import useBus from '@/components/form/_utils/useBus'

  const formStore = useFormStore()

  const bus = useBus()

  const emits = defineEmits(['click'])

  const props = defineProps(buttonProps())

  console.log(props.formId)

  const handleClick = (event: Event) => {
    bus.emit('validate', props.formId)

    console.log('forms', formStore.forms)
    console.log('errors', formStore.errors)

    const errors = Object.values(formStore.errors[props.formId])

    const error = !!errors.includes(false)

    emits('click', { event, error })
  }
</script>

<template>
  <a-button 
    v-bind="$attrs"
    type="primary"
    @click="handleClick"
  >
    <slot></slot>
  </a-button>
</template>
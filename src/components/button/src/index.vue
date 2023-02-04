<script lang="ts">
  import { 
    defineComponent 
  } from 'vue'
  import useFormStore from '@/components/form/_utils/formStore'
  import { buttonProps } from './types'
  import useBus from '@/components/form/_utils/useBus'

  export default defineComponent({
    name: 'ZButton',
    props: buttonProps(),
    emits: ['click'],
    setup(props, context) {
      const formStore = useFormStore()

      const bus = useBus()

      const handleClick = (event: Event) => {
        if(props.btnType === 'validate') {
          bus.emit('validate', props.formId)

          const errors = Object.values(formStore.errors[props.formId!])

          const error = !!errors.includes(false)

          context.emit('click', { event, error })
          return
        }

        if(props.btnType === 'clear') {
          formStore.CLEAR_FORM(props.formId!)
        }
      }

      return {
        handleClick
      }
    }
  })
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
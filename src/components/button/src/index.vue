<script lang="ts">
  import { defineComponent } from 'vue'
  import useFormStore from '@/components/form/_utils/formStore'
  import { capsule } from '../../props'
  import { buttonProps } from './props'
  import useBus from '@/components/form/_utils/useBus'

  export default defineComponent({
    name: 'ZButton',

    props: {
      ...buttonProps(),

      capsule
    },

    emits: ['click'],

    setup(props, context) {
      const formStore = useFormStore()

      const bus = useBus()

      const onClick = (event: Event) => {
        let validateInfo = {}
        
        // 校验
        if(props.btnType === 'validate') {
          bus.emit('validate', props.formId)

          const errors = Object.values(formStore.errors[props.formId!])

          const error = !!errors.includes(false)

          validateInfo = { error, form: formStore.forms[props.formId!] }
        }

        // 清空
        else if(props.btnType === 'clear') {
          formStore.CLEAR_FORM(props.formId!)
        }

        // 重置
        else if(props.btnType === 'reset') {
          formStore.RESET_FORM(props.formId!)
        }

        context.emit('click', { event, ...validateInfo })
      }

      return {
        onClick
      }
    }
  })
</script>

<template>
  <div 
    class="z-input z-input-btn" 
    :class="{ 
      capsule, 
      block: ($attrs.block || $attrs.block === '')
    }"
  >
    <a-button 
      v-bind="$attrs"
      @click="onClick"
    >
      <slot></slot>
    </a-button>
  </div>
</template>
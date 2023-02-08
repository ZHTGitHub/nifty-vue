<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import type { PropType } from 'vue'
  import { Modal } from 'ant-design-vue'

  export default defineComponent({
    name: 'ZPopup',

    props: {
      cancelText: {
        type: String as PropType<string>,
        default: '取消'
      },

      confirmText: {
        type: String as PropType<string>,
        default: '确认'
      },

      title: {
        type: String as PropType<string>
      },

      visible: {
        type: Boolean as PropType<boolean>,
        default: false
      },

      cancel: {
        type: Function,
        default: () => {}
      },

      confirm: {
        type: Function,
        default: () => {}
      }
    },

    setup(props) {
      const show = ref<boolean>(props.visible)

      const handleCancel = () => {
        if(typeof props.cancel === 'function') {
          show.value = false
          props.cancel()
        }
      }

      const handleConfirm = () => {
        if(typeof props.confirm === 'function') {
          props.confirm()
        }
      }

      return {
        show,
        handleCancel,
        handleConfirm
      }
    },

    components: {
      AModal: Modal
    }
  })
</script>

<template>
  <a-modal 
    v-model:visible="show" 
    :title="title" 
    @cancel="handleCancel"
    @ok="handleConfirm"
  >
    <p>Some contents...</p>
  </a-modal>
</template>
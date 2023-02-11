import { defineComponent, ref, computed, type PropType } from 'vue'
import './style.scss'

type Size = 'small' | 'medium' | 'large' | 'x-large'

enum ModalSize {
  small = 320,
  medium = 560,
  large = 720,
  xLarge = 960,
  'x-large' = 960
}

export default defineComponent({
  name: 'ZModal',

  props: {
    cancelText: {
      type: String as PropType<string>,
      default: '取消'
    },

    centered: {
      type: Boolean as PropType<boolean>,
        default: true
    },

    confirmText: {
      type: String as PropType<string>,
      default: '确认'
    },

    size: {
      type: String as PropType<Size>,
      default: 'medium'
    }
  },

  emits: ['cancel', 'confirm'],

  setup(props, { attrs, emit }) {
    const visible = ref<boolean>(false)

    const computedWidth = computed(() => {
      return attrs.width || ModalSize[props.size]
    })

    const onClose = () => {
      visible.value = false
    }

    const onOpen = () => {
      visible.value = true
    }

    const handleCancel = () => {
      onClose()
      emit('cancel')
    }

    const handleConfirm = () => {
      emit('confirm')
    }

    return {
      visible,
      computedWidth,
      onClose,
      onOpen,
      handleCancel,
      handleConfirm
    }
  },

  render() {
    return (
      <a-modal 
        v-model:visible={ this.visible } 
        { ...this.$attrs }
        centered={ this.$props.centered }
        footer={ null }
        width={ this.computedWidth }
        wrapClassName="z-modal"
      >
        <div class="z-modal-container">
          { this.$slots.default?.() }
        </div>

        <div class="z-modal-footer">
          <z-btn
            class="cancel"
            ghost
            type="primary"
            onClick={ this.handleCancel }
          >{ this.$props.cancelText }</z-btn>

          <z-btn
            type="primary"
            onClick={ this.handleConfirm }
          >{ this.$props.confirmText }</z-btn>
        </div>
      </a-modal>
    )
  }
})
import { defineComponent, ref, computed, type PropType } from 'vue'
import { useFormStore } from '../../store'
import type { BtnType } from '../button/types'
import type { FormId } from '../form/types'
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
    },

    type: {
      type: String as PropType<'normal' | 'form'>
    }
  },

  emits: ['cancel', 'confirm'],

  setup(props, { attrs, emit, slots }) {
    const formStore = useFormStore()

    const visible = ref<boolean>(false)
    const btnType = ref<BtnType>('normal')
    const formId = ref<FormId>()

    console.log(slots.default()[0].props)

    if(props.type === 'form') {
      btnType.value = 'validate'
      formId.value = slots.default()[0].props.formId
    }

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
      const errors = Object.values(formStore.getFormErrors(formId.value))
      const error = !!errors.includes(false)
      
      emit('confirm', { error, form: formStore.getForm(formId.value) })
    }

    return {
      visible,
      btnType,
      formId,
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
            btnType={ this.btnType }
            formId={ this.formId }
            onClick={ this.handleConfirm }
          >{ this.$props.confirmText }</z-btn>
        </div>
      </a-modal>
    )
  }
})
import { defineComponent, ref, computed, watch } from 'vue'
import type { PropType } from 'vue'
import { useFormStore } from '../_util/store'
import type { BtnType } from '../button/types'
import type { FormId } from '../form/types'
import './style.scss'

type Size = 'small' | 'medium' | 'large' | 'x-large'

enum ModalSizes {
  small = 320,
  medium = 560,
  large = 720,
  xLarge = 960,
  // 'x-large' = 960
}

export default defineComponent({
  name: 'ZDialog',

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

    detail: {
      type: Object as PropType<object>,
      default: null,
    },

    fullscreen: {
      type: Boolean as PropType<boolean>,
      default: false
    },

    mask: {
      type: Boolean as PropType<boolean>,
      default: true
    },

    showCancelButton: {
      type: Boolean as PropType<boolean>,
      default: true
    },

    showConfirmButton: {
      type: Boolean as PropType<boolean>,
      default: true
    },

    size: {
      type: String as PropType<Size>,
      default: 'medium'
    },

    type: {
      type: String as PropType<'normal' | 'form'>
    },
  },

  emits: ['cancel', 'confirm'],

  setup(props, { attrs, emit, slots }) {
    const formStore = useFormStore()

    const visible = ref<boolean>(false)
    const btnType = ref<BtnType>('normal')
    const formId = ref<FormId>(void 0)

    if(props.type === 'form') {
      btnType.value = 'validate'
      formId.value = slots.default()[0].props.formId
    }

    const computedWidth = computed(() => {
      if(attrs.width) return attrs.width

      switch (props.size) {
        case 'small': return 320;
        case 'medium': return 560;
        case 'large': return 720;
        case 'x-large': return 960;
        default: return 560;
      }
    })

    watch(() => visible.value, (visible) => {
      if(props.type === 'form' && !visible) {
        formStore.RESET_FORM(formId.value)
      }
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
      let validateInfo = { error: false, form: void 0 }

      if(formId.value) {
        const errors = Object.values(formStore.getFormErrors(formId.value))
        const error = !!errors.includes(false)
        validateInfo = { error, form: formStore.getForm(formId.value) }
      }

      emit('confirm', validateInfo, { detail: props.detail })
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
    const { cancelText, centered, confirmText, mask, fullscreen, showCancelButton, showConfirmButton } = this.$props

    return (
      <a-modal 
        v-model:visible={ this.visible } 
        { ...this.$attrs }
        centered={ centered }
        destroyOnClose
        footer={ null }
        mask={ this.fullscreen ? false : mask }
        width={ this.computedWidth }
        wrapClassName={ `z-dialog ${ fullscreen && 'fullscreen' }` }
      >
        <div class="z-modal-container">
          { this.$slots.default?.() }
        </div>

        {
          this.$slots.footer?.() ||
          <div class="z-modal-footer">
            {
              showCancelButton &&
              <z-btn
                class="cancel"
                ghost
                type="primary"
                onClick={ this.handleCancel }
              >{ cancelText }</z-btn>
            }

            {
              showConfirmButton &&
              <z-btn
                type="primary"
                btnType={ this.btnType }
                formId={ this.formId }
                onClick={ this.handleConfirm }
              >{ confirmText }</z-btn>
            }
          </div>
        }
      </a-modal>
    )
  }
})
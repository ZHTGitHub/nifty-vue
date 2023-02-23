  import type { PropType } from 'vue'
  import type { PopupType } from './types'
  import { defineComponent, ref } from 'vue'
  import { Modal, Button } from 'ant-design-vue'
  import './style.scss'

  export default defineComponent({
    name: 'ZPopup',

    components: {
      AModal: Modal,
      ABtn: Button
    },

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

      content: {
        type: String as PropType<string>
      },

      title: {
        type: String as PropType<string>
      },

      type: {
        type: String as PropType<PopupType>
      },

      visible: {
        type: Boolean as PropType<boolean>,
        default: false
      },

      width: {
        type: [String, Number] as PropType<string | number>,
        default: 320
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
          props.cancel()
          show.value = false
        }
      }

      const handleConfirm = () => {
        if(typeof props.confirm === 'function') {
          props.confirm()
          show.value = false
        }
      }

      return {
        show,
        handleCancel,
        handleConfirm
      }
    },

    render() {
      const { cancelText, centered, confirmText, content, title, type, width } = this.$props

      return (
        <a-modal 
          v-model:visible={ this.show }
          centered={ centered }
          dialogClass="z-popup"
          footer={ null }
          title={ title }
          width={ width }
          wrapClassName="z-popup"
        >
          <div class="z-popup-header">
            <i class={ ['z-icon', type && `z-icon-${ type }`] }></i>
            <span class="title">{ title }</span>
          </div>

          <div class="z-popup-container">
            { content }
          </div>

          <div class="z-popup-footer">
            <a-btn
              class="cancel"
              ghost
              type="primary"
              onClick={ this.handleCancel }
            >{ cancelText }</a-btn>

            <a-btn
              type="primary"
              onClick={ this.handleConfirm }
            >{ confirmText }</a-btn>
          </div>
        </a-modal>
      )
    }
  })
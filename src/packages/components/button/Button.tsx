import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { useFormStore } from '../../store'
import { formId, capsule } from '../props'
import { eventBus } from '../../utils/eventBus'
import classNames from '../form/_utils/classNames'
import type { BtnType } from './types'

export default defineComponent({
  name: 'ZBtn',

  props: {
    formId,
  
    btnType: {
      type: String as PropType<BtnType>,
      default: 'normal'
    },

    capsule
  },

  emits: ['click'],

  setup(props, { attrs, emit, slots }) {
    const formStore = useFormStore()

    const onClick = (event: Event) => {
      let formInfo = { error: false, form: void 0 }
      
      // 校验
      if(props.btnType === 'validate') {
        eventBus.emit('validate', props.formId)

        const errors = Object.values(formStore.getFormErrors(props.formId!))

        const error = !!errors.includes(false)

        formInfo.error = error
      }

      // 清空
      else if(props.btnType === 'clear') {
        formInfo.error = false
        formStore.CLEAR_FORM(props.formId!)
      }

      // 重置
      else if(props.btnType === 'reset') {
        formInfo.error = false
        formStore.RESET_FORM(props.formId!)
      }

      emit('click', { event, ...formInfo, form: formStore.getForm(props.formId!) })
    }

    const btnClassName = classNames('z-input z-input-btn', {
      'capsule': props.capsule,
      block: attrs.block || attrs.block === ''
    })

    return () => (
      <div class={ btnClassName }>
        <a-button 
          { ...attrs }
          onClick={ onClick }
        >
          { slots.default?.() }
        </a-button>
      </div>
    )
  }
})


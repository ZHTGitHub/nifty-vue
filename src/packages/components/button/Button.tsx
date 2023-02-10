import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { useFormStore } from '../../store'
import { formId, capsule } from '../props'
import useBus from '../../hooks/useBus'
import classNames from '../form/_utils/classNames'

type BtnType = 'normal'  | 'clear' | 'reset' | 'validate'

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

    const bus = useBus()

    const onClick = (event: Event) => {
      let validateInfo = {}
      
      // 校验
      if(props.btnType === 'validate') {
        bus.emit('validate', props.formId)

        const errors = Object.values(formStore.getFormErrors(props.formId!))

        const error = !!errors.includes(false)

        validateInfo = { error, form: formStore.getForm(props.formId!) }
      }

      // 清空
      else if(props.btnType === 'clear') {
        formStore.CLEAR_FORM(props.formId!)
      }

      // 重置
      else if(props.btnType === 'reset') {
        formStore.RESET_FORM(props.formId!)
      }

      emit('click', { event, ...validateInfo })
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


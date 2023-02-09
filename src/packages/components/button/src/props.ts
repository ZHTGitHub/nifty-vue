import type { PropType } from 'vue'

type BtnType = 'normal'  | 'clear' | 'reset' | 'validate'

export const buttonProps = () => ({
  formId: {
    type: String as PropType<string>
  },

  btnType: {
    type: String as PropType<BtnType>,
    default: 'normal'
  }
})
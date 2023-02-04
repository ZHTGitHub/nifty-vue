import type { PropType } from 'vue'
import type { FormId } from '@/components/form/types'

type BtnType = 'normal'  | 'clear' | 'reset' | 'validate'

export const buttonProps = () => ({
  formId: {
    type: String as PropType<FormId>
  },

  btnType: {
    type: String as PropType<BtnType>,
    default: 'normal'
  }
})
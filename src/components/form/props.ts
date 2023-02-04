import type { PropType } from 'vue'
import type { FormId, Direction } from './types'

const formProps = () => ({
  formId: {
    type: String as PropType<FormId>
  }, 
  
  formKey: {
    type: String as PropType<string>
  },

  direction: {
    type: String as PropType<Direction>,
    default: 'horizontal'
  },

  label: {
    type: [String, Number] as PropType<string | number>
  }
})

export default formProps
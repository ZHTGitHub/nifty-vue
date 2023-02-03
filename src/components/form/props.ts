import type { PropType } from 'vue'
import type { Direction } from './types'

const formProps = () => ({
  formId: {
    type: String as PropType<string>
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
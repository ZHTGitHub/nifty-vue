import type { PropType } from 'vue'
import type { FormId, Direction } from './types'

export const formProps = () => ({
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
  },

  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: 38
  }
})

export const itemsProps = () => ({
  itemLabel: {
    type: String,
    default: 'label'
  },

  items: {
    type: Array as PropType<any[]>,
    default: () => []
  },

  itemValue: {
    type: String,
    default: 'value'
  }
})
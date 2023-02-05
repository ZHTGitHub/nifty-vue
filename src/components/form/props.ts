import type { PropType } from 'vue'
import type { Direction } from './types'

export const formProps = () => ({
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
  },

  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: 38
  }
})

export const itemsProps = () => ({
  itemLabel: {
    type: String as PropType<string>,
    default: 'label'
  },

  items: {
    type: Array as PropType<any[]>,
    default: () => []
  },

  itemValue: {
    type: String as PropType<string>,
    default: 'value'
  }
})
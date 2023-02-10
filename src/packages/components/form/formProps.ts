import type { PropType } from 'vue'
import type { Direction } from './types'
import { formId } from '../props'

export interface RuleItem {
  name: string,
  value?: string | number | Array<string | number>,
  message: string
}

export const inputProps = () => ({
  formId, 
  
  formKey: {
    type: String as PropType<string>
  },

  defaultValue: {
    type: [String, Number] as PropType<string | number>
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
    default: 40
  },

  rules: {
    type: Array as PropType<RuleItem[]>
  }
})

export const inputItemsProps = () => ({
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
import type { PropType } from 'vue'
import type { Direction, GroupConfig, LabelConfig, RuleItem } from './type'

// 表单ID
export const formId = {
  type: String as PropType<string>
}

// 使表单组件呈胶囊状
export const capsule = {
  type: Boolean as PropType<boolean>,
  default: false
}

// label与input的排版(水平方向/水平方向)
export const direction = {
  type: String as PropType<Direction>,
  default: 'horizontal'
}

// Input label config
export const labelConfig = {
  type: Object as PropType<LabelConfig>,
  default: () => ({})
}

// Input group config
export const groupConfig = {
  type: Object as PropType<GroupConfig>,
  default: () => ({})
}

// Input
export const inputProps = () => ({
  formId, 
  
  formKey: {
    type: String as PropType<string>
  },

  defaultValue: {
    type: [String, Number, Boolean, Array, Object] as PropType<any>,
    default: undefined,
  },

  direction,

  label: {
    type: [String, Number] as PropType<string | number>
  },

  labelConfig,

  rules: {
    type: Array as PropType<RuleItem[]>
  }
})

// Input items
export const inputItemsProps = () => ({
  itemLabel: {
    type: String as PropType<string>,
    default: 'label'
  },

  items: {
    type: Array as PropType<any[]>,
    default: () => ([])
  },

  itemValue: {
    type: String as PropType<string>,
    default: 'value'
  }
})
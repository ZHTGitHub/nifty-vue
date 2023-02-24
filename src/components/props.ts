import type { PropType } from 'vue'
import type { Direction, LabelConfig, GroupConfig } from './types'

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

// Input label
export const labelConfig = {
  type: Object as PropType<LabelConfig>,
  default: () => ({})
}

// Input group
export const groupConfig = {
  type: Object as PropType<GroupConfig>,
  default: () => ({})
}
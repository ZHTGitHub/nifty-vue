import type { PropType } from 'vue'
import type { Direction } from './types'

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
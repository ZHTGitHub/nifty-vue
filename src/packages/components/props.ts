import type { PropType } from 'vue'

// 表单ID
export const formId = {
  type: String as PropType<string>
}

// 使表单组件呈胶囊状
export const capsule = {
  type: Boolean as PropType<boolean>,
  default: false
}
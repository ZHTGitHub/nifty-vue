import { ref, computed, watch } from 'vue'
import nifty from 'rocket-nifty.js'
import rulesFunc from './rules'

// 是否必填
export const useFormRequired = (rules: any[]): boolean => {
  const result = nifty.find(rules, { required: true })
  return !!result
}

export const useErrorMessage = (value?: any, rules?: any[]) => {
  const errorMessage = ref<string>('')

  watch(() => value.value, (val) => {
    if(!rules) return
    for(let rule of rules) {
      const result = rulesFunc[rule.name](val, rule.value)

      console.log(rule.name, result, rule.message)

      if(!result) {
        errorMessage.value = rule.message
        break
      }
      else {
        errorMessage.value = ''
      }
    }
  })

  return errorMessage
}
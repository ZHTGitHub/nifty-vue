import { ref, watch, onUnmounted, getCurrentInstance } from 'vue'
import type { Ref } from 'vue'
import useFormStore from './formStore'
import useBus from './useBus'
import nifty from 'rocket-nifty.js'
import rulesFunc from './rules'

const bus = useBus()

interface IValidateRuleParams { 
  formId: string, 
  formKey: string, 
  value: any, 
  rules?: any[] 
}

interface IValidateRule {
  errors: any,
  errorMessage: string
}

const errors: any = {}

const validateRule = ({ formId, formKey, value, rules }: IValidateRuleParams): IValidateRule => {
  let errorMessage = ''

  let formStore: any = null
  if(!formStore) formStore = useFormStore()

  // console.log({ formId, formKey })

  if(rules && rules.length) {
    for(let rule of rules) {
      if(value !== void 0) {
        const result = rulesFunc[rule.name](value, rule.value)
  
        if(!result) {
          nifty.set(errors, formId + '.' + formKey, false)
          errorMessage = rule.message
          break
        }
        else {
          nifty.set(errors, formId + '.' + formKey, true)
        }
      }
    }
  }

  formStore.SET_FORM_ERRORS(errors)

  // console.log(errors)

  return {
    errors,
    errorMessage
  }
}

// 是否必填
export const useFormRequired = (rules: any[]): boolean => {
  const result = nifty.find(rules, { name: 'required' })
  return !!result
}

// 错误提示
export const useErrorMessage = ({ formId, formKey, value, rules }: IValidateRuleParams): Ref<string> => {
  const instance = getCurrentInstance()
  const errorMessage = ref<string>('')

  // input
  watch(() => value.value, (val) => {
    errorMessage.value = validateRule({ formId, formKey, value: val, rules }).errorMessage
  })

  // button
  bus.on('validate', (btnFormId: string) => {
    if(formId !== btnFormId) return

    if(value.value === void 0) {
      if(['ZCheckboxGroup', 'ZRangePicker'].includes(instance?.type.name!)) {
        value.value = []
      }
      else {
        value.value = ''
      }
    }

    errorMessage.value = validateRule({ formId, formKey, value: value.value, rules }).errorMessage
  })

  onUnmounted(() => {
    bus.off('validate', () => {})
  })

  return errorMessage
}
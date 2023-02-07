import { ref, watch, onUnmounted, getCurrentInstance } from 'vue'
import type { Ref } from 'vue'
import useFormStore from './formStore'
import type { Data } from './formStore'
import useBus from './useBus'
import _ from '../../_util/lodash'
import rulesFunc from './rules'
import type { RuleName } from './rules'

const bus = useBus()

interface RuleItem<U> { 
  name: RuleName;
  value?: U;
  message: string; 
}

type ValidateRuleParams<T, U> = Data<T> & { rules?: RuleItem<U>[] }

interface ValidateRule<V> {
  errors: V,
  errorMessage: string
}

const errors: any = {}

const validateRule = <T, U, V>({ formId, formKey, value, rules }: ValidateRuleParams<T, U>): ValidateRule<V> => {
  let errorMessage = ''

  let formStore: any = null
  if(!formStore) formStore = useFormStore()

  if(rules && rules.length) {
    for(let rule of rules) {
      if(value !== void 0) {
        const result = rulesFunc[rule.name](value, rule.value as never)
  
        if(!result) {
          _.set(errors, formId + '.' + formKey, false)
          errorMessage = rule.message
          break
        }
        else {
          _.set(errors, formId + '.' + formKey, true)
        }
      }
    }
  }

  formStore.SET_FORM_ERRORS(errors)

  return {
    errors,
    errorMessage
  }
}

// 是否必填
export const useFormRequired = <U>(rules: RuleItem<U>[] = []): boolean => {
  return !!rules.find(rule => rule.name === 'required')
}

// 错误提示
export const useErrorMessage = <T, U>({ formId, formKey, valueRef, rules }: ValidateRuleParams<T, U>): Ref<string> => {
  const errorMessage = ref<string>('')

  if(!formId || !formKey || !valueRef) return errorMessage

  const instance = getCurrentInstance()

  // input
  watch(() => valueRef.value, (value) => {
    errorMessage.value = validateRule({ formId, formKey, value, rules }).errorMessage
  })

  // button
  bus.on('validate', (btnFormId: string) => {
    if(formId !== btnFormId) return

    if(valueRef.value === void 0) {
      const compName = instance?.type.name!

      if(['ZCheckboxGroup', 'ZRangePicker', 'ZUpload'].includes(compName)) {
        valueRef.value = []
      }
      else if(['ZCheckbox', 'ZRadio'].includes(compName)) {
        valueRef.value = false
      }
      else {
        valueRef.value = ''
      }
    }

    errorMessage.value = validateRule({ formId, formKey, value: valueRef.value, rules }).errorMessage
  })

  onUnmounted(() => {
    bus.off('validate', () => {})
  })

  return errorMessage
}
import { ref, watch, onUnmounted, getCurrentInstance } from 'vue'
import type { Ref } from 'vue'
import useFormStore from './formStore'
import type { Data } from './formStore'
import useBus from './useBus'
import _ from '../../_util/lodash'
import rulesFunc from './rules'
import type { RuleName } from './rules'

const bus = useBus()

interface IRuleItem { 
  name: RuleName;
  value?: any;
  message: string; 
}

interface IValidateInputParams {
  formId: string;
  formKey: string;
  value?: any;
  rules?: IRuleItem[]
}

interface IValidateResult {
  errors: object,
  errorMessage: string
}

const errors: any = {}

const validateInput = ({ formId, formKey, value, rules }: IValidateInputParams): IValidateResult => {
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
export const useFormRequired = (rules: IRuleItem[] = []): boolean => {
  return !!rules.find(rule => rule.name === 'required')
}

// 错误提示
export const useErrorMessage = ({ formId, formKey, valueRef, rules }: any): Ref<string> => {
  const errorMessage = ref<string>('')

  if(!formId || !formKey || !valueRef) return errorMessage

  const instance = getCurrentInstance()

  // input
  watch(() => valueRef.value, (value) => {
    errorMessage.value = validateInput({ formId, formKey, value, rules }).errorMessage
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

    errorMessage.value = validateInput({ formId, formKey, value: valueRef.value, rules }).errorMessage
  })

  onUnmounted(() => {
    bus.off('validate', () => {})
  })

  return errorMessage
}
import { ref, watch, onUnmounted, type Ref } from 'vue'
import type { RuleItem } from '../type'
import { useFormStore } from '../store'
import { eventBus } from '../eventBus'
import { set } from '../util'
import rulesFunc from '../rules'

interface IValidateInputParams {
  formId: string;
  formKey: string;
  value?: any;
  rules?: RuleItem[]
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
          set(errors, formId + '.' + formKey, false)
          errorMessage = rule.message
          break
        }
        else {
          set(errors, formId + '.' + formKey, true)
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
export const useFormRequired = (rules: RuleItem[] = []): boolean => {
  return !!rules.find(rule => rule.name === 'required')
}

// 错误提示
export const useErrorMessage = ({ formId, formKey, componentName, valueRef, rules }: any): Ref<string> => {
  const errorMessage = ref<string>('')

  if(!formId || !formKey || !valueRef) return errorMessage

  // input
  watch(() => valueRef.value, (value) => {
    errorMessage.value = validateInput({ formId, formKey, value, rules }).errorMessage
  })

  // 表单校验
  function validateForm(btnFormId: string) {
    if(formId !== btnFormId) return

    if(valueRef.value === void 0) {
      if(['ZCheckboxGroup', 'ZRangePicker', 'ZUpload'].includes(componentName)) {
        valueRef.value = []
      }
      else if(['ZCheckbox', 'ZRadio'].includes(componentName)) {
        valueRef.value = false
      }
      else {
        valueRef.value = ''
      }
    }

    errorMessage.value = validateInput({ formId, formKey, value: valueRef.value, rules }).errorMessage
  }

  eventBus.on('validate', validateForm)

  onUnmounted(() => {
    eventBus.off('validate', validateForm)
  })

  return errorMessage
}
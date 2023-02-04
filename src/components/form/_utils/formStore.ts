import { defineStore } from 'pinia'
import nifty from 'rocket-nifty.js'

export interface State {
  forms: any,
  errors: any
}

export interface Data {
  formId?: string, 
  formKey?: string, 
  value?: string | undefined
}

const useFormStore = defineStore('forms', {
  state: (): State => ({
    forms: {},
    errors: {}
  }),

  actions: {
    // 给表单的每个[key]设置[value]
    SET_FORM_VALUE_BY_KEY(data: Data) {
      const { formId, formKey, value } = data

      if(formId && formKey) {
        nifty.set(this.forms, formId + '.' + formKey, value)
      }
    },

    // 清空表单
    CLEAR_FORM(formId: string) {
      nifty.set(this.forms, formId, {})
    },

    // 重置表单
    RESET_FORM(data: Data) {

    },

    // 错误 
    SET_FORM_ERRORS(errors: any) {
      this.errors = errors
    }
  }
})

export default useFormStore
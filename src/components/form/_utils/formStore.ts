import { defineStore } from 'pinia'
import nifty from 'rocket-nifty.js'

export interface State {
  defaultForms: any,
  forms: any,
  errors: any
}

export interface Data {
  formId?: string, 
  formKey?: string, 
  defaultValue?: any,
  value?: any
}

const useFormStore = defineStore('forms', {
  state: (): State => ({
    defaultForms: {},
    forms: {},
    errors: {}
  }),

  actions: {
    // 保存表单的默认值
    SET_FORM_DEFAULT_VALUE({ formId, formKey, defaultValue }: Data) {
      if(!formId || !formKey) return
      nifty.set(this.defaultForms, formId + '.' + formKey, defaultValue)
    },

    // 给表单的每个[key]设置[value]
    SET_FORM_VALUE_BY_KEY({ formId, formKey, value }: Data) {
      if(!formId || !formKey) return
      nifty.set(this.forms, formId + '.' + formKey, value)
    },

    // 清空表单
    CLEAR_FORM(formId: string) {
      if(!formId) return
      nifty.set(this.forms, formId, {})
    },

    // 重置表单
    RESET_FORM(formId: string) {
      if(!formId) return
      nifty.set(this.forms, formId, { ...this.defaultForms[formId] })
    },

    // 错误 
    SET_FORM_ERRORS(errors: any) {
      this.errors = errors
    }
  }
})

export default useFormStore
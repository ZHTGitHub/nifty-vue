import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import _ from '../../_util/lodash'

export interface State {
  defaultForms: any;
  forms: any;
  errors: any;
}

export interface Data<T> {
  formId?: string;
  formKey?: string;
  defaultValue?: T;
  value?: T;
  valueRef?: Ref;
}

const useFormStore = defineStore('forms', {
  state: (): State => ({
    defaultForms: {},
    forms: {},
    errors: {}
  }),

  actions: {
    // 保存表单的默认值
    SET_FORM_DEFAULT_VALUE<T>({ formId, formKey, defaultValue }: Data<T>) {
      if(!formId || !formKey) return
      _.set(this.defaultForms, formId + '.' + formKey, defaultValue)
    },

    // 给表单的每个[key]设置[value]
    SET_FORM_VALUE_BY_KEY<T>({ formId, formKey, value }: Data<T>) {
      if(!formId || !formKey) return
      _.set(this.forms, formId + '.' + formKey, value)
    },

    // 清空表单
    CLEAR_FORM(formId: string) {
      if(!formId) return
      _.set(this.forms, formId, {})
    },

    // 重置表单
    RESET_FORM(formId: string) {
      if(!formId) return
      _.set(this.forms, formId, { ...this.defaultForms[formId] })
    },

    // 错误 
    SET_FORM_ERRORS<T>(errors: T) {
      this.errors = errors
    }
  }
})

export default useFormStore
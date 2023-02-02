import { defineStore } from 'pinia'
import nifty from 'rocket-nifty.js'
import type { State, Data } from './types'

const useFormStore = defineStore('form', {
  state: (): State => ({
    forms: {}
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
    CLEAN_FORM() {

    },

    // 重置表单
    RESET_FORM(data: Data) {

    }
  }
})

export default useFormStore
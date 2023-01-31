import { defineStore } from 'pinia'
import nifty from 'rocket-nifty.js'

interface State {
  forms: any
}

interface Data {
  formId: string, 
  formKey: string, 
  value: string | undefined
}

const useFormStore = defineStore('form', {
  state: (): State => {
    return {
      forms: {}
    }
  },

  actions: {
    // 给表单的每个[key]设置[value]
    SET_FORM_VALUE_BY_KEY(data: Data): void {
      const { formId, formKey, value } = data

      if(formId && formKey) {
        nifty.set(this.forms, formId + '.' + formKey, value)
      }
    },

    // 清空表单
    CLEAN_FORM(): void {

    },

    // 重置表单
    RESET_FORM(data: Data): void {

    }
  }
})

export default useFormStore
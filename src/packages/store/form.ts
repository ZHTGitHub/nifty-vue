import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import _ from '../utils/lodash'

export interface State {
  defaultForms: any;
  forms: any;
  errors: any;
}

export interface FormParams {
  formId?: string;
  formKey?: string;
  defaultValue?: any;
  value?: any;
  valueRef?: Ref;
}

const useFormStore = defineStore('forms', {
  state: (): State => ({
    defaultForms: {},
    forms: {},
    errors: {}
  }),

  getters: {
    getForm: (state: State) => {
      return (formId: string) => {
        return state.forms[formId] || {}
      }
    },

    getFormErrors: (state: State) => {
      return (formId: string) => {
        return state.errors[formId] || {}
      }
    }
  },

  actions: {
    SET_FORM_DEFAULT_VALUE(formId: string, formKey: string, defaultValue: any) {
      _.set(this.defaultForms, formId + '.' + formKey, defaultValue)
    },

    SET_FORM_VALUE_BY_KEY(formId: string, formKey: string, value: any) {
      _.set(this.forms, formId + '.' + formKey, value)
    },

    CLEAR_FORM(formId: string) {
      _.set(this.forms, formId, {})
    },

    RESET_FORM(formId: string) {
      _.set(this.forms, formId, { ...this.defaultForms[formId] })
    },

    SET_FORM_ERRORS(errors: object) {
      this.errors = errors
    }
  }
})

export default useFormStore
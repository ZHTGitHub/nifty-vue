import { computed, watch, getCurrentInstance } from 'vue'
// import type { WritableComputedRef } from 'vue'
import { useFormStore, type FormParams } from '../store'

// component name
export const useComponentName = () => {
  const instance = getCurrentInstance()
  return instance?.type.name!
}

// value
export const useFormValue = (formId?: string, formKey?: string): any => {
  if(!formId || !formKey) return
  
  let formStore: any = null
  if(!formStore) formStore = useFormStore()

  const computedValue = computed({
    get() {
      return formStore.forms[formId]?.[formKey]
    }, 

    set(value: any) {
      formStore.SET_FORM_VALUE_BY_KEY(formId, formKey, value)
    }
  })

  return computedValue
}

// default value
export const useFormDefaultValue = ({ formId, formKey, defaultValue, valueRef }: FormParams) => {
  if(!formId || !formKey) return

  let formStore: any = null
  if(!formStore) formStore = useFormStore()

  watch(() => defaultValue, (defaultVal) => {
    if(defaultVal && valueRef) {
      valueRef.value = defaultVal
      formStore.SET_FORM_DEFAULT_VALUE(formId, formKey, defaultValue)
    }
  }, { immediate: true, deep: true })
}
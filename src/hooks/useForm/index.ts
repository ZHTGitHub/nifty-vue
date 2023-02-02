import { computed, watch } from 'vue'
import useFormStore from '../../store/form'

export const useFormValue = (
  formId: string | undefined, 
  formKey: string | undefined
): any => {
  if(!formId || !formKey) return void 0

  let formStore: any = null
  if(!formStore) formStore = useFormStore()

  const computedValue = computed({
    get() {
      return formStore.forms[formId]?.[formKey]
    }, 

    set(value: string | undefined) {
      formStore.SET_FORM_VALUE_BY_KEY({
        formId,
        formKey,
        value
      })
    }
  })

  return computedValue
}

export const useFormDefaultValue = (
  defaultValue: any, 
  value: any
) => {
  watch(() => defaultValue, (defaultVal) => {
    value.value = defaultVal
  }, { immediate: true })
}
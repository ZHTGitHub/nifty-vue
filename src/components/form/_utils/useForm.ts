import { computed, watch } from 'vue'
import useFormStore, { type Data } from './formStore'

export const useFormValue = (
  formId?: string | undefined, 
  formKey?: string | undefined
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

export const useFormDefaultValue = ({
  formId, 
  formKey,
  defaultValue, 
  value
}: Data) => {
  if(!formId || !formKey) return void 0

  let formStore: any = null
  if(!formStore) formStore = useFormStore()

  watch(() => defaultValue, (defaultVal) => {
    if(defaultVal) {
      value.value = defaultVal

      // console.log(formKey, { defaultVal, value: value.value })

      formStore.SET_FORM_DEFAULT_VALUE({ formId, formKey, defaultValue })
    }
  }, { immediate: true, deep: true })
}
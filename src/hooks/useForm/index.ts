import { computed, type WritableComputedRef } from 'vue'
import useFormStore from '../../store/form'

// export const use= () => {
//   return {
//     formId: {
//       type: String,
//       required: false
//     },

//     formKey: {
//       type: String,
//       required: false
//     },
//   }
// }

type StringOrUndefined = string | undefined
type Value = WritableComputedRef<any>

const useValue = (formId: StringOrUndefined, formKey: StringOrUndefined): Value => {
  const formStore = useFormStore()

  const value: Value = computed({
    get() {
      if(!formId || !formKey) return void 0
      return formStore.forms[formId]?.[formKey]
    }, 

    set(val: StringOrUndefined) {
      if(!formId || !formKey) return void 0
      formStore.SET_FORM_VALUE_BY_KEY({
        formId: formId,
        formKey: formKey,
        value: val
      })
    }
  })

  return value
}

export default useValue
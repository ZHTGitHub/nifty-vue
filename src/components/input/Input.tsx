import { defineComponent, watch } from 'vue'
import FormInput from '../_util/FormInput'
import { capsule, inputProps } from '../_util/props'
import { useComponentName, useFormValue } from '../_util/hooks/useForm'
import { useFormStore } from '../_util/store'

export default defineComponent({
  name: 'ZInput',

  props: {
    ...inputProps(),
    capsule
  },

  setup(props, { attrs }) {
    const componentName = useComponentName()
    const valueRef = useFormValue(props.formId, props.formKey)

    watch(() => props.defaultValue, (defaultValue) => {
      console.log(defaultValue)
    }, { immediate: true, deep: true })

    const setDefaultFormValue = () => {
      if(!props.formId || !props.formKey) return

      const formStore = useFormStore()

      watch(() => props.defaultValue, (defaultVal) => {
        console.log(defaultVal)

        if(defaultVal && valueRef) {
          valueRef.value = defaultVal
          formStore.SET_FORM_DEFAULT_VALUE(props.formId, props.formKey, props.defaultValue)
        }
      }, { immediate: true, deep: true })
    }

    setDefaultFormValue()

    return () => (
      <FormInput
        formId={ props.formId }
        formKey={ props.formKey }
        componentName={ componentName }
        capsule={ props.capsule }
        defaultValue={ props.defaultValue }
        direction={ props.direction }
        label={ props.label }
        labelConfig={ props.labelConfig }
        rules={ props.rules }
        valueRef={ valueRef }
      >
        <a-input 
          { ...attrs }
          v-model:value={ valueRef.value }
        />
      </FormInput>
    )
  }
})
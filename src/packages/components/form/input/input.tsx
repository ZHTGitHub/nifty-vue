import { defineComponent } from 'vue'
import { capsule } from '../../props'
import { formProps } from '../props'
import { useFormDefaultValue, useFormValue } from '../_utils/useForm'
import { useFormRequired, useErrorMessage } from '../_utils/useFormValidator'
import classNames from '../_utils/classNames'

export default defineComponent({
  name: 'ZInput',

  props: {
    ...formProps(),
    capsule
  },

  setup(props, { attrs }) {
    const valueRef = useFormValue(props.formId, props.formKey)

    useFormDefaultValue({
      formId: props.formId, 
      formKey: props.formKey, 
      defaultValue: attrs.defaultValue, 
      valueRef
    })

    const required = useFormRequired(attrs.rules as any[])

    const errorMessageRef = useErrorMessage({
      formId: props.formId, 
      formKey: props.formKey, 
      valueRef, 
      rules: attrs.rules as any[]
    })

    return () => {
      return (
        <div class={classNames(
            'z-input', 
            props.capsule ? 'capsule' : '',
            props.direction === 'horizontal' ? 'horizontal' : '',
            required ? 'required' : '',
            !!errorMessageRef.value ? 'z-input-error' : ''
        )}>

          <label 
            class={classNames('z-input-label', !props.label && 'mr2')}
            style={{
              width: `${ props.labelWidth }px`
            }}
          >
            { props.label }
          </label>

          <div class="z-input-control">
            <a-input 
              { ...attrs }
              v-model:value={ valueRef.value }
            />

            <div class="z-messages">
              <div class="error-message">{ errorMessageRef.value }</div>
            </div>
          </div>
        </div>
      )
    }
  }
})
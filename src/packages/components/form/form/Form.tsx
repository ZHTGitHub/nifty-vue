import { defineComponent, type PropType } from 'vue'
import { formId, capsule } from '../../props'
import { inputProps } from '../formProps'
import './style.scss'

export default defineComponent({
  name: 'zForm',

  props: {
    capsule,

    defaultValues: {
      type: Object as PropType<object>
    },

    direction: inputProps().direction,

    fields: {
      type: Array as PropType<any[]>
    },

    formId,

    labelWidth: inputProps().labelWidth
  },

  setup(props) {
    const { capsule, defaultValues, ...restProps } = props

    return () => (
      <a-row class="z-form">
        {
          props.fields?.map(field => {
            const { name, ...rest } = field
            const { formKey, defaultValue } = field
            const assignDefaultValue = defaultValues[formKey] || defaultValue
    
            return (
              <>
                {
                  name === 'checkbox' && 
                  <a-col span={ 24 }>
                    <z-checkbox 
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'checkboxGroup' && 
                  <a-col span={ 24 }>
                    <z-checkbox-group 
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'date' && 
                  <a-col span={ 24 }>
                    <z-date-picker
                      capsule={ capsule }
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'editor' && 
                  <a-col span={ 24 }>
                    <z-editor
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'range' && 
                  <a-col span={ 24 }>
                    <z-range-picker
                      capsule={ capsule }
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'input' && 
                  <a-col span={ 24 }>
                    <z-input 
                      capsule={ capsule }
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'radio' && 
                  <a-col span={ 24 }>
                    <z-radio 
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'radioGroup' && 
                  <a-col span={ 24 }>
                    <z-radio-group 
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'select' && 
                  <a-col span={ 24 }>
                    <z-select 
                      capsule={ capsule }
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'switch' && 
                  <a-col span={ 24 }>
                    <z-switch 
                      defaultValue={ assignDefaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }
              </>
            )
          })
        }
      </a-row>
    )
  }
})

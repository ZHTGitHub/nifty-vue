import { defineComponent, type PropType } from 'vue'
import { formId, capsule } from '../../props'
import { inputProps } from '../formProps'
import './style.scss'

export default defineComponent({
  name: 'zForm',

  props: {
    capsule,

    fields: {
      type: Array as PropType<any[]>
    },

    formId,

    labelWidth: inputProps().labelWidth
  },

  setup(props) {
    const { capsule, ...restProps } = props

    return () => (
      <a-row class="z-form">
        {
          props.fields?.map(field => {
            const { name, ...rest } = field
    
            return (
              <>
                {
                  name === 'checkbox' && 
                  <a-col span={ 24 }>
                    <z-checkbox 
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'checkboxGroup' && 
                  <a-col span={ 24 }>
                    <z-checkbox-group 
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
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'editor' && 
                  <a-col span={ 24 }>
                    <z-editor
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
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'radio' && 
                  <a-col span={ 24 }>
                    <z-radio 
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'radioGroup' && 
                  <a-col span={ 24 }>
                    <z-radio-group 
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
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'switch' && 
                  <a-col span={ 24 }>
                    <z-switch 
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

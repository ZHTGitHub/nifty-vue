import { defineComponent, type PropType } from 'vue'
import { formId, capsule } from '../../props'
import { inputProps } from '../formProps'
import type { Direction } from '../types'
import './style.scss'

interface Field {
  name: string;
  formKey: string;
  label?: string;
  capsule?: boolean;
  direction?: Direction;
  items?: any[];
  placeholder?: string;
  rules?: { name: string; value?: string | number | Array<string | number>; message: string }[];
  // 日期格式
  format?: string;
}

export default defineComponent({
  name: 'zForm',

  props: {
    capsule,

    defaultValues: {
      type: Object as PropType<object>
    },

    direction: inputProps().direction,

    fields: {
      type: Array as PropType<Field[]>
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
            const defaultValue = defaultValues[rest.formKey]

            return (
              <>
                {
                  name === 'checkbox' && 
                  <a-col span={ 24 }>
                    <z-checkbox 
                      defaultValue={ defaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'checkboxGroup' && 
                  <a-col span={ 24 }>
                    <z-checkbox-group 
                      defaultValue={ defaultValue }
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
                      defaultValue={ defaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'editor' && 
                  <a-col span={ 24 }>
                    <z-editor
                      defaultValue={ defaultValue }
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
                      defaultValue={ defaultValue }
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
                      defaultValue={ defaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'radio' && 
                  <a-col span={ 24 }>
                    <z-radio 
                      defaultValue={ defaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'radioGroup' && 
                  <a-col span={ 24 }>
                    <z-radio-group 
                      defaultValue={ defaultValue }
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
                      defaultValue={ defaultValue }
                      { ...restProps }
                      { ...rest }
                    />
                  </a-col>
                }

                {
                  name === 'switch' && 
                  <a-col span={ 24 }>
                    <z-switch 
                      defaultValue={ defaultValue }
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

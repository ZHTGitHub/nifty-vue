import { defineComponent, type PropType } from 'vue'
import { formId, capsule } from '../../props'
import { inputProps } from '../formProps'
import type { Row, Col, Field } from './types'
import './style.scss'

export default defineComponent({
  name: 'zForm',

  props: {
    capsule,

    col: {
      type: Object as PropType<Col>,
      default: () => ({})
    },

    defaultValues: {
      type: Object as PropType<object>
    },

    direction: inputProps().direction,

    fields: {
      type: Array as PropType<Field[]>
    },

    formId,

    labelWidth: inputProps().labelWidth,

    row: {
      type: Object as PropType<Row>,
      default: () => ({})
    }
  },

  setup(props, { slots }) {
    const { capsule, col: commonCol, defaultValues, ...restProps } = props

    return () => (
      <>
        <a-row class="z-form" { ...props.row }>
          { slots.head?.() }

          {
            props.fields?.map(field => {
              const { name, col: fieldCol, ...rest } = field
              const defaultValue = defaultValues?.[rest.formKey]
              const col = { ...commonCol, ...fieldCol }

              return (
                <>
                  {
                    name === 'checkbox' && 
                    <a-col span={ 24 } { ...col }>
                      <z-checkbox 
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'checkboxGroup' && 
                    <a-col span={ 24 } { ...col }>
                      <z-checkbox-group 
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'date' && 
                    <a-col span={ 24 } { ...col }>
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
                    <a-col span={ 24 } { ...col }>
                      <z-editor
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'range' && 
                    <a-col span={ 24 } { ...col }>
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
                    <a-col span={ 24 } { ...col }>
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
                    <a-col span={ 24 } { ...col }>
                      <z-radio 
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'radioGroup' && 
                    <a-col span={ 24 } { ...col }>
                      <z-radio-group 
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'select' && 
                    <a-col span={ 24 } { ...col }>
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
                    <a-col span={ 24 } { ...col }>
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

          { slots.tail?.() }
        </a-row>
      </>
    )
  }
})

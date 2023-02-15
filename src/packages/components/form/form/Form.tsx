import { defineComponent, type PropType } from 'vue'
import { capsule, formId, groupConfig, labelConfig } from '../../props'
import { inputProps } from '../formProps'
import type { Row, Col, Field } from './types'
import './style.scss'

const GROUPS = ['checkboxGroup', 'radioGroup']

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

    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },

    fields: {
      type: Array as PropType<Field[]>
    },

    formId,

    groupConfig,

    labelConfig,

    row: {
      type: Object as PropType<Row>,
      default: () => ({})
    }
  },

  setup(props, { slots }) {
    const { 
      capsule, 
      col: commonCol, 
      disabled: commonDisabled, 
      defaultValues, 
      groupConfig: commonGroupConfig,
      ...restCommonProps 
    } = props

    return () => (
      <>
        <a-row class="z-form" { ...props.row }>
          { slots.head?.() }

          {
            props.fields?.map(field => {
              const { 
                name, 
                col: fieldCol, 
                defaultValue: fieldDefaultValue,
                disabled: fieldDisabled, 
                groupConfig: fieldGroupConfig,
                ...rest 
              } = field
              const defaultValue = fieldDefaultValue || defaultValues?.[rest.formKey]
              const col = { ...commonCol, ...fieldCol }
              const disabled = fieldDisabled || commonDisabled
              const groupConfig = GROUPS.includes(name) ? { ...commonGroupConfig, ...fieldGroupConfig } : {}

              return (
                <>
                  {
                    name === 'checkbox' && 
                    <a-col span={ 24 } { ...col }>
                      <z-checkbox 
                        defaultValue={ defaultValue }
                        disabled={ disabled }
                        { ...restCommonProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'checkboxGroup' && 
                    <a-col span={ 24 } { ...col }>
                      <z-checkbox-group 
                        defaultValue={ defaultValue }
                        disabled={ disabled }
                        groupConfig={ groupConfig }
                        { ...restCommonProps }
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
                        disabled={ disabled }
                        { ...restCommonProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'editor' && 
                    <a-col span={ 24 } { ...col }>
                      <z-editor
                        defaultValue={ defaultValue }
                        disabled={ disabled }
                        { ...restCommonProps }
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
                        disabled={ disabled }
                        { ...restCommonProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    (name === 'input' || !name) && 
                    <a-col span={ 24 } { ...col }>
                      <z-input 
                        capsule={ capsule }
                        defaultValue={ defaultValue }
                        disabled={ disabled }
                        { ...restCommonProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'radio' && 
                    <a-col span={ 24 } { ...col }>
                      <z-radio 
                        defaultValue={ defaultValue }
                        disabled={ disabled }
                        { ...restCommonProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'radioGroup' && 
                    <a-col span={ 24 } { ...col }>
                      <z-radio-group 
                        defaultValue={ defaultValue }
                        disabled={ disabled }
                        groupConfig={ groupConfig }
                        { ...restCommonProps }
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
                        disabled={ disabled }
                        { ...restCommonProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'switch' && 
                    <a-col span={ 24 } { ...col }>
                      <z-switch 
                        defaultValue={ defaultValue }
                        disabled={ disabled }
                        { ...restCommonProps }
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

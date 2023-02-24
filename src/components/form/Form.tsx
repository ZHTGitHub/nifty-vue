import { defineComponent, type PropType } from 'vue'
import { capsule, formId, labelConfig } from '../props'
import { inputProps } from '../_util/formProps'
import type { GroupConfig } from '../types'
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

    groupConfig: {
      type: Object as PropType<GroupConfig>,
      default: () => ({})
    },

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
      labelConfig: commonLabelConfig,
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
                labelConfig: fieldLabelConfig,
                ...rest 
              } = field
              const defaultValue = fieldDefaultValue || defaultValues?.[rest.formKey]
              const col = { span: 24, ...commonCol, ...fieldCol }
              const disabled = fieldDisabled || commonDisabled
              const groupConfig = GROUPS.includes(name) ? { ...commonGroupConfig, ...fieldGroupConfig } : {}
              const labelConfig = { ...commonLabelConfig, ...fieldLabelConfig }
              const suffixSlot = slots[rest.formKey]?.()

              return (
                <>
                  {
                    name === 'checkbox' && 
                    <>
                      <a-col { ...col }>
                        <z-checkbox 
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'checkboxGroup' && 
                    <>
                      <a-col { ...col }>
                        <z-checkbox-group 
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          groupConfig={ groupConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'date' && 
                    <>
                      <a-col { ...col }>
                        <z-date-picker
                          capsule={ capsule }
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'editor' && 
                    <>
                      <a-col { ...col }>
                        <z-editor
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'range' && 
                    <>
                      <a-col { ...col }>
                        <z-range-picker
                          capsule={ capsule }
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    (name === 'input' || !name) && 
                    <>
                      <a-col { ...col }>
                        <z-input 
                          capsule={ capsule }
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'radio' && 
                    <>
                      <a-col { ...col }>
                        <z-radio 
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'radioGroup' && 
                    <>
                      <a-col { ...col }>
                        <z-radio-group 
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          groupConfig={ groupConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'select' && 
                    <>
                      <a-col { ...col }>
                        <z-select 
                          capsule={ capsule }
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'switch' && 
                    <>
                      <a-col { ...col }>
                        <z-switch 
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restCommonProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
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

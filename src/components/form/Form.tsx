import { defineComponent, type PropType } from 'vue'
import { formId } from '../_util/props'
import type { Direction, LabelConfig, GroupConfig } from '../_util/type'
import type { Row, Col, Field } from './types'
import './style.scss'

const GROUPS = ['checkboxGroup', 'radioGroup']

interface Config {
  capsule?: Boolean;
  col?: Col;
  defaultValues?: {};
  direction?: Direction;
  disabled?: Boolean;
  group?: GroupConfig;
  items?: {};
  label?: LabelConfig;
  row?: Row;
} 

const defaultConfig = {
  capsule: false,
  col: {},
  defaultValues: {},
  direction: 'horizontal',
  disabled: false,
  group: {},
  items: {},
  label: {},
  row: {}
}

export default defineComponent({
  name: 'ZForm',

  props: {
    config: {
      type: Object as PropType<Config>,
      default: () => ({})
    },

    defaultValues: {
      type: Object as PropType<object>
    },

    fields: {
      type: Array as PropType<Field[]>
    },

    formId
  },

  setup(props, { slots }) {
    const { 
      defaultValues, 
      fields,
      ...restProps 
    } = props

    const config = { ...defaultConfig, ...props.config }

    return () => (
      <>
        <a-row class="z-form" { ...config.row }>
          { slots.head?.() }

          {
            fields?.map(field => {
              const { 
                name, 
                capsule: fieldCapsule,
                col: fieldCol, 
                default: fieldDefault,
                defaultValue: fieldDefaultValue,
                disabled: fieldDisabled, 
                groupConfig: fieldGroupConfig,
                items: fieldItems,
                labelConfig: fieldLabelConfig,
                ...rest 
              } = field

              const capsule = fieldCapsule || config.capsule
              const defaultValue = fieldDefaultValue || defaultValues?.[rest.formKey]
              const col = { span: 24, ...config.col, ...fieldCol }
              const disabled = fieldDisabled || config.disabled
              const groupConfig = GROUPS.includes(name) ? { ...config.group, ...fieldGroupConfig } : {}
              const labelConfig = { ...config.label, ...fieldLabelConfig }
              const suffixSlot = slots[rest.formKey]?.()

              let items = []

              if(Array.isArray(fieldItems)) {
                items = fieldItems
              }

              if(Array.isArray(config.items[field.formKey])) {
                items = config.items[field.formKey]
              }

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
                          { ...restProps }
                          { ...rest }
                        >
                          { fieldDefault?.() }
                        </z-checkbox>
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
                          items={ items }
                          labelConfig={ labelConfig }
                          groupConfig={ groupConfig }
                          { ...restProps }
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
                          { ...restProps }
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
                          { ...restProps }
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
                          { ...restProps }
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
                          { ...restProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'inputNumber' && 
                    <>
                      <a-col { ...col }>
                        <z-input-number
                          capsule={ capsule }
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restProps }
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
                          { ...restProps }
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
                          items={ items }
                          labelConfig={ labelConfig }
                          groupConfig={ groupConfig }
                          { ...restProps }
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
                          items={ items }
                          labelConfig={ labelConfig }
                          { ...restProps }
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
                          { ...restProps }
                          { ...rest }
                        />
                      </a-col>

                      { suffixSlot }
                    </>
                  }

                  {
                    name === 'textarea' && 
                    <>
                      <a-col { ...col }>
                        <z-textarea 
                          capsule={ capsule }
                          defaultValue={ defaultValue }
                          disabled={ disabled }
                          labelConfig={ labelConfig }
                          { ...restProps }
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

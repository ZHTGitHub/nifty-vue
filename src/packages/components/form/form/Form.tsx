import { defineComponent, type PropType } from 'vue'
import { formId, capsule } from '../../props'
import { inputProps } from '../formProps'
import type { Direction } from '../types'
import './style.scss'

interface Row {
  align: string;
  gutter: number | object | Array<string | number>;
  justify: string;
  wrap: boolean
}

interface Col {
  flex?: string | number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  span?: number;
  xxxl?: number | object;
  xs?: number | object;
  sm?: number | object;
  md?: number | object;
  lg?: number | object;
  xl?: number | object;
  xxl?: number | object;
}

interface Field {
  name: string;
  formKey: string;
  label?: string;
  capsule?: boolean;
  col?: Col;
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
    const { capsule, col: sameCol, defaultValues, ...restProps } = props

    return () => (
      <>
        { slots.top?.() }
        <a-row class="z-form" { ...props.row }>
          { slots.head?.() }

          {
            props.fields?.map(field => {
              const { name, col, ...rest } = field
              const defaultValue = defaultValues?.[rest.formKey]

              const assignCol = { ...sameCol, ...col }

              return (
                <>
                  {
                    name === 'checkbox' && 
                    <a-col span={ 24 } { ...assignCol }>
                      <z-checkbox 
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'checkboxGroup' && 
                    <a-col span={ 24 } { ...assignCol }>
                      <z-checkbox-group 
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'date' && 
                    <a-col span={ 24 } { ...assignCol }>
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
                    <a-col span={ 24 } { ...assignCol }>
                      <z-editor
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'range' && 
                    <a-col span={ 24 } { ...assignCol }>
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
                    <a-col span={ 24 } { ...assignCol }>
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
                    <a-col span={ 24 } { ...assignCol }>
                      <z-radio 
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'radioGroup' && 
                    <a-col span={ 24 } { ...assignCol }>
                      <z-radio-group 
                        defaultValue={ defaultValue }
                        { ...restProps }
                        { ...rest }
                      />
                    </a-col>
                  }

                  {
                    name === 'select' && 
                    <a-col span={ 24 } { ...assignCol }>
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
                    <a-col span={ 24 } { ...assignCol }>
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
        { slots.bottom?.() }
      </>
    )
  }
})

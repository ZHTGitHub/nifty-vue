import type { Direction, GroupConfig, LabelConfig } from '../types'

export type FormId = string | undefined

export type FormKey = string | undefined

export interface Row {
  align?: string;
  gutter?: number | object | Array<string | number>;
  justify?: string;
  wrap?: boolean
}

export interface Col {
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

export interface Field {
  name: string;
  formKey: string;
  label?: string;
  capsule?: boolean;
  col?: Col;
  defaultValue?: string | number | Array<string | number | object>;
  direction?: Direction;
  disabled?: boolean;
  groupConfig?: GroupConfig;
  labelConfig?: LabelConfig;
  items?: any[];
  placeholder?: string;
  rules?: { name: string; value?: string | number | Array<string | number>; message: string }[];
  // 日期格式
  format?: string;
}
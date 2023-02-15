import type { Direction } from '../types'

export interface Row {
  align: string;
  gutter: number | object | Array<string | number>;
  justify: string;
  wrap: boolean
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
  direction?: Direction;
  items?: any[];
  placeholder?: string;
}
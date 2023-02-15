export type Direction = 'horizontal' | 'vertical'

export interface LabelConfig {
  align?: 'left' | 'right';
  label?: string | number;
  width?: string;
}

export interface GroupConfig {
  direction?: Direction
}
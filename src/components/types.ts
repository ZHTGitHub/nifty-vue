export type Direction = 'horizontal' | 'vertical'

export interface LabelConfig {
  align?: 'left' | 'right';
  label?: string | number;
  minWidth?: string;
  width?: string;
}

export interface GroupConfig {
  direction?: Direction
}
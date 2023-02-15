export type Direction = 'horizontal' | 'vertical'

export interface LabelConfig {
  align?: 'left' | 'right';
  width?: string;
}

export interface GroupConfig {
  direction?: Direction
}
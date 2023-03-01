export type Direction = 'horizontal' | 'vertical'

// Group
export interface GroupConfig {
  direction?: Direction
}

// Label
export interface LabelConfig {
  align?: 'left' | 'right';
  label?: string | number;
  width?: string;
}

// Rule item
export interface RuleItem {
  name: string,
  value?: string | number | Array<string | number>,
  message: string
}
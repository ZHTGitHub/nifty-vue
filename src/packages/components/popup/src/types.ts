import type { App } from 'vue'
export type PopupType = 'info' | 'success' | 'warning' | 'success'

export interface IOptions {
  cancelText?: string;
  centered?: boolean;
  confirmText?: string;
  content?: string;
  title?: string;
  type?: PopupType;
  visible?: boolean;
  width?: string | number;
  cancel?: () => void;
  confirm?: () => void;
}
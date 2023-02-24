export type PopupType = 'info' | 'success' | 'warning' | 'error'

export interface Options {
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
/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module 'vue' {
  export interface GlobalComponents {
    ZButton: typeof import('nifty-vue')['Button'];

    ZChekbox: typeof import('nifty-vue')['Chekbox'];
    ZCheckboxGroup: typeof import('nifty-vue')['CheckboxGroup'];
    ZDatePicker: typeof import('nifty-vue')['DatePicker'];
    ZRangePicker: typeof import('nifty-vue')['RangePicker'];
    ZEditor: typeof import('nifty-vue')['Editor'];
    ZInput: typeof import('nifty-vue')['Input'];
    ZRadio: typeof import('nifty-vue')['Radio'];
    ZRadioGroup: typeof import('nifty-vue')['RadioGroup'];
    ZSelect: typeof import('nifty-vue')['Select'];
    ZSwitch: typeof import('nifty-vue')['Switch'];
    ZUpload: typeof import('nifty-vue')['Upload'];

    ZForm: typeof import('nifty-vue')['Form'];

    ZDialog: typeof import('nifty-vue')['Dialog'];
    ZPopup: typeof import('nifty-vue')['Popup'];
  }
}

export {}
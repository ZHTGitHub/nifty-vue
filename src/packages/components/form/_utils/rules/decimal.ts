/**
 * @description 接受正负小数
 * @param {String} value
 */ 
const decimal = (value: string): boolean => {
  return /^(\-|\+)?\d+(\.\d+)?$/.test(value)
}

export default decimal
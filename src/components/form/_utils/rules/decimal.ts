/**
 * @description 接受正负小数
 * @param {String} value
 */ 
const decimal = (value: string): boolean => {
  const reg = /^(\-|\+)?\d+(\.\d+)?$/
  return reg.test(value)
}

export default decimal
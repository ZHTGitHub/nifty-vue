/**
 * @description 整数
 * @param {String} value
 */ 
const integer = (value: string): boolean => {
  return /^-?[1-9]\d*$/.test(value)
}

export default integer
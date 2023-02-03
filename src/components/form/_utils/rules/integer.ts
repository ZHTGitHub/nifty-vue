/**
 * @description 整数
 * @param {String} value
 */ 
const integer = (value: string): boolean => {
  const reg = /^-?[1-9]\d*$/
  return reg.test(value)
}

export default integer
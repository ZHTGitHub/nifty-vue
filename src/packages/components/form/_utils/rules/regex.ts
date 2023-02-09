/**
 * @description 正则表达式
 * @param {String} value
 * @param {RegExp} reg
 */ 
const regex = (value: string, reg: RegExp): boolean => {
  return reg.test(value)
}

export default regex
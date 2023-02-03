/**
 * @description 正整数
 * @param {String} value
 */ 
const numeric = (value: string): boolean => {
  const reg = /^[0-9]*$/
  return reg.test(value)
}

export default numeric
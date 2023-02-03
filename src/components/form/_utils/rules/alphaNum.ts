/**
 * @description 英文字母及自然数
 * @param {String} value
 */ 
const alphaNum = (value: string): boolean => {
  const reg = /^[A-Za-z0-9]+$/
  return reg.test(value)
}

export default alphaNum
/**
 * @description 英文字母及自然数
 * @param {String} value
 */ 
const alphaNum = (value: string): boolean => {
  return /^[A-Za-z0-9]+$/.test(value)
}

export default alphaNum
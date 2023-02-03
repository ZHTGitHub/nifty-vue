/**
 * @description 英文字母
 * @param {String} value
 */ 
const alpha = (value: string): boolean => {
  const reg = /^[A-Za-z]+$/
  return reg.test(value)
}

export default alpha
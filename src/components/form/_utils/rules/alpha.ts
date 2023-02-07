/**
 * @description 英文字母
 * @param {String} value
 */ 
const alpha = (value: string): boolean => {
  return /^[A-Za-z]+$/.test(value)
}

export default alpha
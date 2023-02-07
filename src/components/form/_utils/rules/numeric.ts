/**
 * @description 正整数
 * @param {String} value
 */ 
const numeric = (value: string): boolean => {
  return /^[0-9]*$/.test(value)
}

export default numeric
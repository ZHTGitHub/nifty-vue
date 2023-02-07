/**
 * @description 手机号
 * @param {String} value
 */ 
const phone = (value: string): boolean => {
  return /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/.test(value)
}

export default phone
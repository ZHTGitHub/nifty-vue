/**
 * @description 必填
 * @param {String} value
 */ 
const required = (value: any): boolean => {
  if(value === undefined || value == null || value === false) {
    return false
  }

  return /[\S]+/.test(value)
}

export default required
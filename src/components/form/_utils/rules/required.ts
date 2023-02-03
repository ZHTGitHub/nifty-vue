/**
 * @description 必填
 * @param {String} value
 */ 
const required = (value: string): boolean => {
  if(value === undefined || value == null) {
    return false
  }

  const reg = /[\S]+/
  return reg.test(value)
}

export default required
/**
 * @description 邮箱
 * @param {String} value
 */ 
const email = (value: string): boolean => {
  var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(value)
}

export default email
/**
 * @description 邮箱
 * @param {String} value
 */ 
const email = (value: string): boolean => {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
}

export default email
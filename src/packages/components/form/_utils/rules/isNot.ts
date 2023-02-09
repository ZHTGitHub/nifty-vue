/**
 * @description 是否与给定值不匹配，严格相等
 * @param {String} value
 * @param {String} rule
 */ 
const isNot = (value: string, rule: string): boolean => {
  return value !== rule
}

export default isNot
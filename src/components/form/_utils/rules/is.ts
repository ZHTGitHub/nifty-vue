/**
 * @description 是否与给定值匹配，严格相等
 * @param {String} value
 * @param {String} rule
 */ 
const is = (value: string, rule: string): boolean => {
  return value === rule
}

export default is
/**
 * @description 包含
 * @param {String} value
 * @param {Array} rule
 */ 
const included = (value: string, rule: string): boolean => {
  return !!value?.includes(rule)
}

export default included
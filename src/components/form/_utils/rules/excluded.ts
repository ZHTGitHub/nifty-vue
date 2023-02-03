/**
 * @description 不包含
 * @param {String} value
 * @param {Array} rule
 */ 
const excluded = (value: string, rule: string[]): boolean => {
  for(let r of rule) {
    if(value.includes(r)) {
      return false
    }
  }

  return true
}

export default excluded
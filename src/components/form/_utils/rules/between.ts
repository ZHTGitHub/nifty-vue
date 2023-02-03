/**
 * @description 不得小于/大于指定的值
 * @param {String} value
 */ 
const between = (value: string, rule: string): boolean => {
  const values = rule.split(',')
  const minValue = +values[0]
  const maxValue = +values[1]
  const length = value?.length

  if(length >= minValue && length <= maxValue) {
    return true
  }

  return false
}

export default between
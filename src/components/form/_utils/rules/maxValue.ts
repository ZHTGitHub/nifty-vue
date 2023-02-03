/**
 * @description 最大值
 * @param {String} value
 * @param {String} maxValue
 */ 
const maxValue = (value: string, maxValue: number): boolean => {
  return +value <= +maxValue
}

export default maxValue
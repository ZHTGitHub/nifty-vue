/**
 * @description 最大长度
 * @param {String} value
 * @param {String} max
 */ 
const max = (value: string, max: number): boolean => {
  return value?.length <= max
}

export default max
/**
 * @description 固定长度
 * @param {String} value
 * @param {String} rule
 */ 
const leng = (value: string, leng: number): boolean => {
  return value.length === leng
}

export default leng
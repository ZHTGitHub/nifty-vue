/**
 * @description 最小长度
 * @param {String} value
 * @param {String} min
 */ 
const min = (value: string, min: number): boolean => {
  return value?.length >= min
}

export default min
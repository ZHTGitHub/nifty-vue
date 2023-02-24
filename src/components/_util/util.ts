export const isFunction = val => typeof val === 'function'
export const isArray = Array.isArray
export const isString = val => typeof val === 'string'
export const isSymbol = val => typeof val === 'symbol'
export const isObject = val => val !== null && typeof val === 'object'

// set
export const set = function(object: any, path: string | string[], value: any): any {
  let paths = Array.isArray(path) ? path : path.split('.')
  let current = object

  for(let i = 0; i < paths.length; i++) {
    if(i === paths.length - 1) {
      current[paths[i]] = value
    } 
    else {
      if(current[paths[i]] === undefined) {
        current[paths[i]] = {}
      }
      
      current = current[paths[i]]
    }
  }

  return object
}
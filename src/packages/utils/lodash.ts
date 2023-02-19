// set
const set = function(object: any, path: string | string[], value: any): any {
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

// get
const get = function(object: any, path: string | string[], defaultValue?: any): any {
  let paths = Array.isArray(path) ? path : path.split('.')
  let current = object

  for(let i = 0; i < paths.length; i++) {
    if(current[paths[i]] === undefined) {
      return defaultValue
    }

    current = current[paths[i]]
  }

  return current
}

export default {
  get,
  set
}


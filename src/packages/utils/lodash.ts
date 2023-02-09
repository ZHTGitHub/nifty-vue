type Path = string | string[]

// 处理 path， path有三种形式：'a[0].b.c'、'a.0.b.c' 和 ['a','0','b','c']，需要统一处理成数组，便于后续使用
const splitPath = function(path: Path): string[] {
  if(Array.isArray(path)) {
    return path
  }

  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
}

const get = function<T>(object: T, path: Path, defaultValue: T): T {
  if(typeof object !== 'object') {
    return defaultValue
  }

  // 沿着路径寻找到对应的值，未找到则返回默认值 defaultValue
  return splitPath(path).reduce((o: any, k: any) => (o || {})[k], object) || defaultValue
}

const set =  function<T>(object: T, path: Path, value: T): T {
  if (typeof object !== 'object') 
    return object

    splitPath(path).reduce((o: any, k: any, i: number, _) => {
      // 若遍历结束直接赋值
      if (i === _.length - 1) { 
        o[k] = value
        return null
      } 
      // 若存在对应路径，则返回找到的对象，进行下一次遍历
      else if (k in o) { 
        return o[k]
      } 
      // 若不存在对应路径，则创建对应对象，若下一路径是数字，新对象赋值为空数组，否则赋值为空对象
      else { 
        o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {}
        return o[k]
      }
  }, object)

  return object
}

export default {
  get,
  set
}


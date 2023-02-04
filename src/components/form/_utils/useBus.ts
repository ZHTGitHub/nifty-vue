class Bus {
  events: any
  
  constructor() {
    this.events = {}
  }

  emit(name: string, data?: any) {
    this.events[name]?.map((fn: Function) => {
      fn(data)
    })
  } 

  on(name: string, fn: Function) {
    this.events[name] = this.events[name] || []
    this.events[name].push(fn)
  }

  off(name: string, fn: Function) {
    if(!this.events[name]) return

    const lastIndex = this.events[name].length - 1
      
    for (let i = lastIndex; i >= 0; i--) {
      if (this.events[name][i] === fn) {
        this.events[name].splice(i, 1)
        break
      }
    }
  }
}

const bus = new Bus

const useBus = () => {
  return {
    emit: bus.emit.bind(bus),
    on: bus.on.bind(bus),
    off: bus.off.bind(bus)
  }
}

export default useBus
interface IEventBus {
  on(eventName: string, callback: Function): void;
  off(eventName: string, callback: Function): void;
  emit(eventName: string, ...args: any[]): void;
}

class EventBus implements IEventBus { 
  private events: { [key: string]: Function[] } = {}

  on(eventName: string, callback: Function) {
    if(!this.events[eventName]) {
      this.events[eventName] = []
    }

    this.events[eventName].push(callback)
  }

  off(eventName: string, callback: Function) {
    if(!this.events[eventName]) {
      return
    }

    const index = this.events[eventName].indexOf(callback)

    if(index > -1) {
      this.events[eventName].splice(index, 1)
    }
  }

  emit(eventName: string, ...args: any[]) {
    if(!this.events[eventName]) {
      return
    }

    this.events[eventName].forEach(callback => {
      callback(...args)
    })
  }
}

const eventBus = new EventBus

export { eventBus }
export default EventBus
class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    return () => {
      this.events[eventName] =
        this.events[eventName].filter(fn => fn !== callback);
    };
  }

  emit(eventName, data) {
    const eventCallbacks = this.events[eventName];

    if (eventCallbacks && eventCallbacks.length > 0) {
      eventCallbacks.forEach(callback => {
        try {
          callback(data);
        } catch (err) {
          if (eventName !== 'error') {
            this.emit(
              'error', 
              `Error in listener for "${eventName}": ${err.message}`
            );
          }
        }
      });
    }
  }
}

class TemperatureSensor extends EventEmitter {
  updateTemperature(newTemp) {
    console.log(`[Sensor]: New temperature ${newTemp}°C`);
    this.emit('tempChange', newTemp);
  }
}

module.exports = { TemperatureSensor };
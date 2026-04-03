class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    this.items.push({ item, priority });
  }

  peek(type) {
    const len = this.items.length;
    if (len === 0) {
        return null;
    }

    if (type === "oldest") {
        return this.items[0];
    }

    if (type === "newest") {
        return this.items[len - 1];
    }

    if (type === "highest") {
      let high = this.items[0];
      for (let i = 1; i < len; i++) {
        if (this.items[i].priority > high.priority) {
          high = this.items[i];
        }
      }
      return high;
    }

    if (type === "lowest") {
      let low = this.items[0];
      for (let el of this.items) {
        if (el.priority < low.priority) {
            low = el;
        }
      }
      return low;
    }

    return null;
  }

  dequeue(type) {
    if (this.items.length === 0) {
        return null;
    }    

    switch (type) {
      case "oldest": 
        return this.items.shift();
      case "newest": 
        return this.items.pop();
      case "highest":
      case "lowest":
        let targetIdx = 0;
        for (let i = 1; i < this.items.length; i++) {
          const current = this.items[i].priority;
          const best = this.items[targetIdx].priority;
          
          if (type === "highest" ? current > best : current < best) {
            targetIdx = i;
          }
        }
        return this.items.splice(targetIdx, 1)[0];
      default:
        return null;
    }
  }
}

module.exports = PriorityQueue;
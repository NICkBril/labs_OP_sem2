class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    this.items.push({ item, priority });
  }

  peek(type) {
    if (this.items.length === 0) {
      return null;
    }

    if (type === "oldest") {
      return this.items[0];
    }

    if (type === "newest") {
      return this.items[this.items.length - 1];
    }

    if (type === "highest") {
      let high = this.items[0];
      for (let i = 1; i < this.items.length; i++) {
        if (this.items[i].priority > high.priority) {
          high = this.items[i];
        }
      }
      return high;
    }

    if (type === "lowest") {
      let low = this.items[0];
      for (let i = 1; i < this.items.length; i++) {
        if (this.items[i].priority < low.priority) {
          low = this.items[i];
        }
      }
      return low;
    }

    return null;
  }
}

module.exports = PriorityQueue;
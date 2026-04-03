class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    this.items.push({ item, priority });
  }
}

module.exports = PriorityQueue;
const PriorityQueue = require("./priorityQueue");

const pq = new PriorityQueue();

pq.enqueue("A", 3);
pq.enqueue("B", 7);
pq.enqueue("C", 1);
pq.enqueue("D", 5);

console.log("Highest:", pq.peek("highest"));
console.log("Lowest:", pq.peek("lowest"));
console.log("Oldest:", pq.peek("oldest"));
console.log("Newest:", pq.peek("newest"));

console.log("Remove highest:", pq.dequeue("highest"));
console.log("Remove lowest:", pq.dequeue("lowest"));
console.log("Remove oldest:", pq.dequeue("oldest"));
console.log("Remove newest:", pq.dequeue("newest"));
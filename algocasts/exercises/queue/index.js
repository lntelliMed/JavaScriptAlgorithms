// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// Attempt #1
// class Queue {
//   constructor () {
//     this.queue = [];
//   }

//   add (val) {
//     this.queue.unshift(val);
//   }

//   remove () {
//     if (!this.queue.length) {
//       return;
//     }
//     return this.queue.pop();
//   }
// }

// Attempt #2
// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   add(val) {
//     this.queue.push(val);
//   }

//   remove() {
//     if (!this.queue.length) {
//       return;
//     }
//     return this.queue.shift();
//   }
// }

// Attempt #3
function Queue() {
  this.queue = [];
}

Queue.prototype.add = function (val) {
  this.queue.unshift(val);
}

Queue.prototype.remove = function () {
  if (!this.queue.length) return;
  return this.queue.pop();
}


module.exports = Queue;

// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// Attempt #1
/* class Stack {
  constructor () {
    this.stack = [];
  }

  push (val) {
    this.stack.push(val);
  }

  pop () {
    // if (!this.stack.length) {
    //   return;
    // }
    return this.stack.pop();
  }

  peek() {
    // if (!this.stack.length) {
    //   return;
    // }
    return this.stack[this.stack.length - 1];
  }
} */


// Attempt #1
class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.unshift(val);
  }

  pop() {
    // if (!this.stack.length) {
    //   return;
    // }
    return this.stack.shift();
  }

  peek() {
    // if (!this.stack.length) {
    //   return;
    // }
    return this.stack[0];
  }
}
module.exports = Stack;

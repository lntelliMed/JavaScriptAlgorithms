// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }
  insertFirst(val) {
    this.head = new Node(val, this.head);
  }
  size () {
    let current = this.head;
    let counter = 0;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current) {
      if (!current.next) {
        return current;
      }
      current = current.next;
    }
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
}

module.exports = { Node, LinkedList };

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
    // this.tail = null;
    // this.nodeCounts = 0;
  }
  insertFirst(val) {
    // const nextNode = this.head;
    // const newNode = new Node(val, this.head);
    this.head = new Node(val, this.head);
    // this.head.next = nextNode;
    // this.nodeCounts++;
    // if (!this.head) {
    //   this.head = newNode;
      // this.tail = newNode;
    // } else {
      // const nextNode = this.head;
      // this.tail = nextNode;
    //   this.head = newNode;
    //   this.head.next = nextNode;
    // }
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
    // while (current.next) {
    //   current = current.next;
    // }
    // return current;
    while (current) {
      if (!current.next) {
        return current;
      }
      current = current.next;
    }
    // return current;
  }

  clear () {
    // this.nodeCounts = 0;
    this.head = null;
  }
}

module.exports = { Node, LinkedList };

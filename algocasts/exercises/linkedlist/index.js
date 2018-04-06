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
    // this.head = new Node(val, this.head);
    this.insertAt(val, 0);
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
    // return this.head;
    return this.getAt(0);
  }

  getLast () {
    // if (!this.head) {
    //   return null;
    // }
    // let current = this.head;
    // while (current) {
    //   if (!current.next) {
    //     return current;
    //   }
    //   current = current.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    // if (!this.head) {
    //   return;
    // }
    // this.head = this.head.next;
    this.removeAt(0);
  }

   removeLast() {
    // if (!this.head) return;
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let prev = this.head;
    // let curr = this.head.next;

    // while (curr.next) {
    //   prev = prev.next;
    //   curr = curr.next;
    // }

    // prev.next = null;
     this.removeAt(this.size() - 1);

   }

   insertLast (val) {
    // const newNode = new Node(val);
    // const last = this.getLast();
    // if (!last) {
    //   this.head = newNode;
    // } else {
    //   last.next = newNode;
    // }
    this.insertAt(val, this.size());
   }

   getAt (index) {
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter === index) {
        return current;
      }
      current = current.next;
      counter++;
    }
    return null;
  }

  removeAt (index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.getAt(index - 1);
    if (!prevNode || !prevNode.next) return;

    prevNode.next = prevNode.next.next;

  }

  insertAt(val, index) {
    const newNode = new Node(val);

    if (!this.head || index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let prevNode = this.getAt(index - 1);
    if (!prevNode) {
      prevNode = this.getLast();
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

}

module.exports = { Node, LinkedList };

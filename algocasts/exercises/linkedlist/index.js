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

  // Attempt #1
  // removeLast () {
  //   if (!this.head) {
  //     return;
  //   }
  //   if (!this.head.next) {
  //     this.head = null;
  //     return;
  //   }
  //   let current = this.head;
  //   let prev = null;
  //   while (current) {
  //     if (!current.next) {
  //       break;
  //     }
  //     prev = current;
  //     current = current.next;
  //   }
  //   prev.next = null;
  // }

  // Attempt #2
//   removeLast() {
//     if (!this.head) {
//       return;
//     }
//     if (!this.head.next) {
//       this.head = null;
//       return;
//     }

//     let prevNode = this.head;
//     let currentNode = this.head;
//     let nextNode = currentNode.next;
// /*
// a -> b -> null
// |    |    |
// prev cur  next
// */
//     while (nextNode) {
//       prevNode = currentNode;
//       currentNode = currentNode.next;
//       nextNode = nextNode.next;
//     }
//     prevNode.next = null;

//   }

  // Attempt #3
   removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let curr = this.head.next;

    while (curr.next) {
      prev = prev.next;
      curr = curr.next;
    }

    prev.next = null;
   }

   insertLast (val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // let current = this.head;
    // let prev = this.head;
    // while (current) {
    //   prev = current;
    //   current = current.next;
    // }
    // prev.next = newNode;

    this.getLast().next = newNode;
   }

}

module.exports = { Node, LinkedList };

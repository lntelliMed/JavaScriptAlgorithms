// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  // Attempt #1
  // insert (data, root = this) {
  //   if (data < root.data) {
  //     if (root.left === null) {
  //       root.left = new Node(data);
  //     } else {
  //       return this.insert(data, root.left);
  //     }
  //   } else {
  //     if (root.right === null) {
  //       root.right = new Node(data);
  //     } else {
  //       return this.insert(data, root.right);
  //     }
  //   }
  // }

    // Attempt #2
    insert (data) {
      if (data < this.data && this.left) {
        this.left.insert(data);
      } else if (data < this.data) {
        this.left = new Node(data);
      } else if (data > this.data && this.right) {
        this.right.insert(data);
      } else if (data > this.data) {
        this.right = new Node(data);
      }
    }


    // Attempt #1
    // contains (data, root = this) {
    //   if (!root || data === root.data) {
    //     return root;
    //   } else if (data < root.data) {
    //     return this.contains(data, root.left);
    //   } else if (data > root.data) {
    //     return this.contains(data, root.right);
    //   }
    // }

    // Attempt #2
    contains (data) {
      if (this.data === data) {
        return this;
      }

      if (data < this.data && this.left) {
        return this.left.contains(data);
      }

      if (data > this.data && this.right) {
        return this.right.contains(data);
      }

      return null;
    }
}

module.exports = Node;

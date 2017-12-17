'use strict';

class BinaryTree {
  //new LinkedList()...
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

//   find(value) {
//     if (this.next === null && this.value !== value)
//       return null;
//     if (this.value === value)
//       return this;
//     else
//       return this.next.find(value);
//   }

// }

module.exports = BinaryTree;
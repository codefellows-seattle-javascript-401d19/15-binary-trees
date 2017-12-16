'use strict';

const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);

one.left = two;
one.right = three;

three.left = four;
three.right = five;


BinaryTree.prototype.find = function(value) {
  let found = null;

  const findRec = node => {
    if (node.left) {
      findRec(node.left);
    }

    if (node.value === value) {
      found = node;
    }

    if (node.right) {
      findRec(node.right);
    }
    return found;
  };

  return findRec(this);
};

// BinaryTree.prototype.toString = function(str = '') {
//   // do something
// };
//
// BinaryTree.prototype.toArray = function(arr = []) {
//   // do something
// };
//

console.log(one.find(4));

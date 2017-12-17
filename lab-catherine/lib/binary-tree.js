'use strict';

function BinaryTree (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);

one.left = two;
one.right = three;
three.left = four;
three.right = five;

BinaryTree.prototype.find = function (value) {
  if(typeof value !== 'number')
    throw new TypeError('<value> must be a number');
  let foundNode;
  let inOrderTraversal = function (root) {
    if(root === null) {
      return;
    }
    inOrderTraversal(root.left);
    if(value === root.value) {
      foundNode = value;
    }
    inOrderTraversal(root.right);
  };
  inOrderTraversal(one);
  if(foundNode === undefined) {
    foundNode = null;
  }
  return foundNode;
};


// toString(str) should iterate over all child nodes using a pre-order traversal and concatenate their values separated by newlines in to a string
// "1\n2\n3\n"...

// BinaryTree.prototype.toString = function (str) {
  
//   let preOrderTraversal = (root) => {
    
//     if(root === null) {
//       return;
//     }
//     console.log(`Visiting ${root.value}\n`);
//     preOrderTraversal(root.left);
//     preOrderTraversal(root.right);
//   };
  
//   preOrderTraversal(one);
  
// };

// BinaryTree.prototype.toString();


BinaryTree.prototype.toArray = function () {

  let newArray = [];

  let postOrderTraversal = function (root) {
  
    if(root === null) {
      return;
    }
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    // console.log(`Visiting ${root.value}`);
    newArray.push(root.value);
  };
    
  postOrderTraversal(one);
  // console.log('new array', newArray);
  return newArray;
    
  
};


module.exports = BinaryTree;
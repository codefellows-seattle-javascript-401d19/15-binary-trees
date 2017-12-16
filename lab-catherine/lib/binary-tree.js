'use strict';

// Big O(n)
// recursive 
// Memory: relative to the height of the binary tree (the height of this binary tree is 2 (at one)) Every time you traverse you are creating a stack frame  - worst case is n

// # Feature Tasks

// Implement a BinaryTree Constructor (not an ES6 class)
// implement the following prototype methods
// find(value) should iterate over all child nodes using an in-order traversal and return the first node that has that value, it should return null if a node with the value is not found
// toString(str) should iterate over all child nodes using a pre-order traversal and concatenate their values separated by newlines in to a string
// .toArray(array) should use a post-order traversal and push all the tree's elements into an array.


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
  
  let inOrderTraversal = function (root) {
    
    if(root === null) {
      return;
    }

    inOrderTraversal(root.left);
    if(value === root.value) {
      console.log(`Visiting in order: ${value}`);
      return value;
    }
    inOrderTraversal(root.right);
    
  };

  inOrderTraversal(one);

};

BinaryTree.prototype.find(4);


// let preOrderTraversal = (root) => {

//   if(root === null) {
//     return;
//   }
//   console.log(`Visiting ${root.value}`);
//   preOrderTraversal(root.left);
//   preOrderTraversal(root.right);
// };

// preOrderTraversal(one);


// let postOrderTraversal = (root) => {

//   if(root === null) {
//     return;
//   }
//   postOrderTraversal(root.left);
//   postOrderTraversal(root.right);
//   console.log(`Visiting ${root.value}`);
// };

// postOrderTraversal(one);
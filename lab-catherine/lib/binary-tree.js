'use strict';

// Big O(n)
// recursive 
// Memory: relative to the height of the binary tree (the height of this binary tree is 2 (at one)) Every time you traverse you are creating a stack frame  - worst case is n

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    // this.parent = ...; (in some other implementations) this implementation won't have a parent property
  }
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

// if you paste this code into chrome you can explore the values

let preOrderTraversal = (root) => {

  if(root === null) {
    return;
  }
  console.log(`Visiting ${root.value}`);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
};

preOrderTraversal(one);


let postOrderTraversal = (root) => {

  if(root === null) {
    return;
  }
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(`Visiting ${root.value}`);
};

postOrderTraversal(one);

let inOrderTraversal = (root) => {

  if(root === null) {
    return;
  }
  inOrderTraversal(root.left);
  console.log(`Visiting in order: ${root.value}`);
  inOrderTraversal(root.right);
};

inOrderTraversal(one);
'use strict';

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.inOrderTraversal = function(root) {
  if (root === null) return;
  BinaryTree.prototype.inOrderTraversal(root.left);
  console.log('Visiting ', root.value);
  BinaryTree.prototype.inOrderTraversal(root.right);
 
};

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let six = new BinaryTree(6);
let seven = new BinaryTree(7);

one.left = two;
one.right = three;

three.left = four
three.right = five;

four.left = six;
four.right = seven;

console.log(one);
one.inOrderTraversal(seven);

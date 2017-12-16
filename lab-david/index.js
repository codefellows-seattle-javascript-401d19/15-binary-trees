'use strict';

// setting up constructor
const binaryTree = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;

  //methods on the constructor

  Shape.prototype.setLocation = function(x, y) {
    this.x = x;
    this.y = y;

  // iterate over all child nodes using an in-order traversal and return first node with the value, return null if not found
  binaryTree.prototype.find = function(value) {
    this.value = value;

  };

  // iterate over all nodes using pre-order traversal and concatenate their values separated by newlines into a string
  binaryTree.prototype.toString = function(str) {
  
  
  };

  // should use post-order traversal push all tree elements into an array
  binaryTree.prototype.toArray = function(array) {


  };  
};

// this is all the nodes 
let one = new binaryTree(1);
let two = new binaryTree(2);
let three = new binaryTree(3);
let four = new binaryTree(4);
let five = new binaryTree(5);

// setting up binary tree
one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.right = six;


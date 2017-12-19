'use strict';

// setting up constructor
const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};
  // methods on the constructor
  // iterate over all child nodes using an in-order traversal and return first node with the value, return null if not found
BinaryTree.prototype.find = function(value) {
  if(this.value === value) {
    console.log(value);
    return this;
  }
  if(this.value > 0)
    return null;

  if(this.left.value) {
    this.left.find(value);
    console.log(this.value);
  }
  
  if(this.right.value) {
    this.right.find(value);
    console.log(this.value);
  }

  else
    return null;
};

// iterate over all nodes using pre-order traversal and concatenate their values separated by newlines into a string
BinaryTree.prototype.toString = function(str) {
  // if(typeof str !== 'string')
  //   throw new TypeError('argument <string> must be an string');

  str = '';

  if(this === null)
    return;

  str = str `+ ${this.value}`;
  BinaryTree.toString(root.left);
  BinaryTree.toString(root.right);
  return str;

};

// should use post-order traversal push all tree elements into an array
BinaryTree.prototype.toArray = function(array) {
  if(!Array.isArray(array))
    throw new TypeError('argument <array> must be an array');

  array = [];

  BinaryTree.toArray(this.left);
  BinaryTree.toArray(this.right);
  BinaryTree.toArray(this.value);

  array.push(this);

  return array;
};  


// moved these to the tests so can remove, i think
// this is all the nodes 
let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let six = new BinaryTree(6);


// setting up binary tree
one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.right = six;

module.exports = BinaryTree;
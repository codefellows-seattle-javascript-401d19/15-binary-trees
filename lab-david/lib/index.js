'use strict';

// setting up constructor
const binaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  // methods on the constructor
  // iterate over all child nodes using an in-order traversal and return first node with the value, return null if not found
  binaryTree.prototype.find = function(root) {

    if(root !== null)
      return root.value;

    binaryTree.find(root.left);
    binaryTree.find(root.value);
    binaryTree.find(root.right);

    return null;

  };

  // iterate over all nodes using pre-order traversal and concatenate their values separated by newlines into a string
  binaryTree.prototype.toString = function(root) {
    let string = '';

    if(root === null)
      return;

    string = string `+ ${root.value}`;
    binaryTree.toString(root.left);
    binaryTree.toString(root.right);
    return string;

  };

  // should use post-order traversal push all tree elements into an array
  binaryTree.prototype.toArray = function(root) {

    let newArray = [];

    binaryTree.toArray(root.left);
    binaryTree.toArray(root.right);
    binaryTree.toArray(root.value);

    newArray.push(value);

    return newArray;

  };  
};

// this is all the nodes 
let one = new binaryTree(1);
let two = new binaryTree(2);
let three = new binaryTree(3);
let four = new binaryTree(4);
let five = new binaryTree(5);
let six = new binaryTree(6);


// setting up binary tree
one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.right = six;

const index = module.exports = {};

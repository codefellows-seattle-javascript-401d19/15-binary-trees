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
  binaryTree.prototype.find = function(root) {

    if(root !== null)
      return root.value;

    find(root.left);
    find(root.value);
    find(root.right);

    return null;

  };

  // iterate over all nodes using pre-order traversal and concatenate their values separated by newlines into a string
  binaryTree.prototype.toString = function(root) {
    let string = '';

    if(root === null)
      return;

    string = string `+ ${root.value}`;
    toString(root.left);
    toString(root.right);
    return string;

  };

  // should use post-order traversal push all tree elements into an array
  binaryTree.prototype.toArray = function(root) {

    newArray = [];

    toArray(root.left);
    toArray(root.right);
    toArray(root.value);

    newArray.push(value);


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
'use strict';

// setting up constructor
const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  // methods on the constructor
  // iterate over all child nodes using an in-order traversal and return first node with the value, return null if not found
  BinaryTree.prototype.find = function(value) {

    if(root !== null)
      return root.value;

    BinaryTree.find(root.left);
    BinaryTree.find(root.value);
    BinaryTree.find(root.right);

    return null;

  };

  // iterate over all nodes using pre-order traversal and concatenate their values separated by newlines into a string
  BinaryTree.prototype.toString = function(str) {
    if(typeof str != 'string')
      throw new TypeError('argument <string> must be an string');

    let string = '';

    if(root === null)
      return;

    string = string `+ ${root.value}`;
    BinaryTree.toString(root.left);
    BinaryTree.toString(root.right);
    return string;

  };

  // should use post-order traversal push all tree elements into an array
  BinaryTree.prototype.toArray = function(array) {
    if(!Array.isArray(array))
      throw new TypeError('argument <array> must be an array');

    let newArray = [];

    BinaryTree.toArray(root.left);
    BinaryTree.toArray(root.right);
    BinaryTree.toArray(root.value);

    newArray.push(value);

    return newArray;

  };  
};

// moved these to the tests so can remove
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
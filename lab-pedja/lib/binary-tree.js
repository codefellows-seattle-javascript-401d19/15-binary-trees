'use strict';

let foundNode;

const BinaryTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;

};
BinaryTree.prototype.find = function(value) {

  if(this.left !== null){
    this.left.find(value);
  }

  if(this.value === value){  
    foundNode = this;
    return;
  }

  if(this.right !== null){
    this.right.find(value);
  }

  return foundNode;
};

// TODO toString(str) should iterate over all child nodes using a pre-order traversal and concatenate their values separated by newlines in to a string


BinaryTree.prototype.toString = function () {
  
  let one = new BinaryTree(1);
  let two = new BinaryTree(2);
  let three = new BinaryTree(3);
  let four = new BinaryTree(4);
  let five = new BinaryTree(5);
  
  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;

  let result = [];
  let output;
  function preOrderTraversal (root) {

    if(root === null)
      return;
  
    result.push(root.value.toString());
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
  preOrderTraversal(one);
  output = result.join('\n');
  return output;
};


module.exports = BinaryTree;
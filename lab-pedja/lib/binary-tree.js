'use strict';

function BinaryTree (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.find = function (value) {
  if(typeof value !== 'number'){
    throw new TypeError('value should be a number');
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
  if(foundNode === undefined){
    foundNode = null;
  }
  inOrderTraversal(one);
  return foundNode;
};

// TODO toString(str) should iterate over all child nodes using a pre-order traversal and concatenate their values separated by newlines in to a string

BinaryTree.prototype.toString = function (value) {
  if(typeof value !== 'number'){
    throw new TypeError('value should be a number');
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

  // TODO add stringify method here
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
  if(foundNode === undefined){
    foundNode = null;
  }
  inOrderTraversal(one);
  return foundNode;
};

module.exports = BinaryTree;
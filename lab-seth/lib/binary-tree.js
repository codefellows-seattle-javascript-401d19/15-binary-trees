'use strict';

const BinaryTree = function (value) {
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

BinaryTree.prototype.find = function(value) {
  let node = this;
  let foundNode = null; 
  if(typeof value !== 'number') return null;

  let hunter = function (node, value) {
    if(node.left) hunter(node.left, value);
    if(node.value === value) {
      foundNode = node;
      return;
    }
    if(node.right) hunter(node.right, value);
  };
  
  hunter(node, value);
  return foundNode;
};

//TODO: ADD toString() PRE-ORDER METHOD

//TODO: ADD toArray() POST-ORDER METHOD

module.exports.BinaryTree = BinaryTree;
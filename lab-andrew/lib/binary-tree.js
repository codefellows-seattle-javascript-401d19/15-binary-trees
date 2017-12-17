'use strict';

const BinaryTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.preOrderTraversal = root => {

  if (root === null){
    return;
  }

  console.log(root.value);
  BinaryTree.preOrderTraversal(root.left);
  BinaryTree.preOrderTraversal(root.right);
};

BinaryTree.prototype.findInOrder = function(value){

  if (this.left){
    if (this.left.findInOrder(value)){
      return this.left.findInOrder(value);
    }
  }

  if (this.value === value){
    return this;
  }

  if (this.right){
    if (this.right.findInOrder(value)){
      return this.right.findInOrder(value);
    }
  }

  return null;
};

BinaryTree.prototype.preOrderToString = function (string) {

  if (!string){
    string = `${this.value}`;
  } else {
    string += `\n${this.value}`;
  }
  
  if (this.left) {
    string = this.left.preOrderToString(string);
  }
  
  if (this.right) {
    string = this.right.preOrderToString(string);
  }
  return string;
};

BinaryTree.postOrderTraversal = root => {

  if (root === null){
    return;
  }

  BinaryTree.postOrderTraversal(root.left);
  BinaryTree.postOrderTraversal(root.right);
  console.log(root.value);
};

module.exports = BinaryTree;
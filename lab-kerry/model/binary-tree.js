'use strict';

const BinaryTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // BinaryTree.prototype.appendLeft(root, value) {

  // }

  // BinaryTree.prototype.appendRight(root, value) {

  // }

BinaryTree.prototype.find = function(value) {
  let foundIt = null;

  if(this.left) {
    foundIt = this.left.find(value);
  }
  if (this.value === value && !foundIt) {
    foundIt = this;
  }
  if (this.right && !foundIt) {
    foundIt = this.right.find(value);
  }

  return foundIt;
};

BinaryTree.prototype.concatToString = function (str = '') {
  if (str === '') {
    str += this.value;
  } else {
    str += '\n' + this.value;
  }
  if (this.left) {
    str = this.left.concatToString(str);
  }
  if (this.right) {
    str = this.right.concatToString(str);
  }
  return str;
};

BinaryTree.prototype.pushToArray = function (arr = []) {
  
  if (this.left !=null) {
    arr = this.left.pushToArray(arr);
  }
  if (this.right !=null) {
    arr = this.right.pushToArray(arr);
  }
  
  arr.push(this.value);

  return arr;
};

    module.exports = BinaryTree;
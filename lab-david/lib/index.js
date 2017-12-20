'use strict';

const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};
  

BinaryTree.prototype.find = function(value) {
  let foundNode = null;

  if(this.left) {
    foundNode = this.left.find(value);
  }

  if(this.value === value && !foundNode) {
    foundNode = this;
  }
  if(this.right && !foundNode) {
    foundNode = this.right.find(value);
  }

  return foundNode;
};

BinaryTree.prototype.toString = function(str) {
  if(!str){
    str = `${this.value}`;
  } else {
    str += `\n${this.value}`;
  }

  if(this.left) {
    str = this.left.toString(str); 
  }

  if(this.right) {
    str = this.right.toString(str);
  }

  return str;

};

BinaryTree.prototype.toArray = function(array) {
  if(array === null)
    return;

  if(this.left){
    array = this.left.toArray(array);
  }

  if(this.right){
    array = this.right.toArray(array);
  }

  if(this.root){
    return array = this.root.toArray(array);
  }

  if(!array){
    array = `[${this.value}]`;
  } else {
    array.push(this.value);
  }

  return array;
};  

module.exports = BinaryTree;
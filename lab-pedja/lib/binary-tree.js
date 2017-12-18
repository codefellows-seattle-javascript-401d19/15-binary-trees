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


BinaryTree.prototype.toString = function (str) {

  if(typeof str !== 'string'){
    throw new TypeError(`toString takes arg that is a string`);
  }
  if(this){
    str += this.value + `\n`;
  }
  if(this.left){
    str = this.left.toString(str);
  }
  if(this.right){
    str = this.right.toString(str);
  }
  let result = str.toString();
  
  return result;

};

// .toArray(array) should use a post-order traversal and push all the tree's elements into an array.

BinaryTree.prototype.toArray = function (array) {
  if(!Array.isArray(array)){
    throw new TypeError(`toArray takes arg that is an array`);
  }
  if(this.left){
    this.left.toArray(array);
  }
  if(this.right){
    this.right.toArray(array);
  }
  
  array.push(this.value);
    
  return array;
};

module.exports = BinaryTree;
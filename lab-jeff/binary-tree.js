'use strict';

const BinaryTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;

};

BinaryTree.prototype.find = function(value) {
  let foundNode = null;
  let foundCount = 0;
  const recursiveFind = (node, value) => {

    if(node.left !== null){
      recursiveFind(node.left, value);
    }
    if(node.value === value){
      if(foundCount === 0){
        foundCount++;
        foundNode = node;
      }
    }
    if(node.right !== null){
      recursiveFind(node.right, value);
    }
  };
  recursiveFind(this, value);
  return foundNode;
};

BinaryTree.prototype.toString = function(str) {
  if(str === undefined) str = '';

  str = str + this.value + '\n';

  if(this.left !== null)
    str = this.left.toString(str);

  if(this.right !== null)
    str = this.right.toString(str);

  return str;
};

BinaryTree.prototype.toArray = function(array) {
  if(array === undefined) array = [];

  if(this.left !== null)
    array = this.left.toArray(array);

  if(this.right !== null)
    array = this.right.toArray(array);

  array.push(this.value);
  return array;
};

module.exports = BinaryTree;

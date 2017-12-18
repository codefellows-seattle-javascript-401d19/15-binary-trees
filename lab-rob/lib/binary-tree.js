'use strict';

const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.find = function(value) {
  let foundNode = null;

  const traverseAndFind = node => {
    if(node.left && !foundNode)
      traverseAndFind(node.left);

    if(node.value === value && !foundNode) 
      return foundNode = node;

    if(node.right && !foundNode)
      traverseAndFind(node.right);
  };

  traverseAndFind(this);
  return foundNode;
};

BinaryTree.prototype.toString = function(str = '') {
  if(typeof str !== 'string')
    throw new TypeError('argument <str> must be of type string.');

  if(str === '')
    str += this.value;
  else
    str += '\n' + this.value;

  if(this.left)
    str = this.left.toString(str);
  
  if(this.right)
    str = this.right.toString(str);

  return str;
};

BinaryTree.prototype.toArray = function(array = []) {
  if(!Array.isArray(array))
    throw new TypeError('argument <array> must be of type array.');

  if(this.left)
    array = this.left.toArray(array);
  
  if(this.right)
    array = this.right.toArray(array);
  
  array.push(this.value);

  return array;
};

module.exports = BinaryTree;

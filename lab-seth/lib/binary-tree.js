'use strict';

const BinaryTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

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

BinaryTree.prototype.toString = function (str = '') {
  if (typeof str !== 'string')
    throw new TypeError('argument must be a string');

  if (str === '')
    str += this.value;
  else
    str += '\n' + this.value;

  if (this.left)
    str = this.left.toString(str);

  if (this.right)
    str = this.right.toString(str);

  return str;
};

BinaryTree.prototype.toArray = function (array = []) {
  if (!Array.isArray(array))
    throw new TypeError('argument must be an array.');

  if (this.left)
    array = this.left.toArray(array);

  if (this.right)
    array = this.right.toArray(array);

  array.push(this.value);

  return array;
};

module.exports = BinaryTree;
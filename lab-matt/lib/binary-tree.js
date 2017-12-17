'use strict';

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  return this;
}

// ============== ADD DIRECT VALUES ==============
BinaryTree.prototype.addLeft = function(value) {
  if (!(value instanceof BinaryTree) && value !== null) {
    value = new BinaryTree(value);
  }

  if (this.left) {
    throw new Error('left node already exists for this tree');
  }

  
  return this.left = value;
};

BinaryTree.prototype.addRight = function(value) {
  if (!(value instanceof BinaryTree) && value !== null) {
    value = new BinaryTree(value);
  }

  if (this.right) {
    throw new Error('right node already exists for this tree');
  }

  return this.right = value;
};

// ============== ADD NEW LEAF'S ==============
BinaryTree.prototype.appendLeft = function(value) {
  if (!(value instanceof BinaryTree) && value !== null) {
    value = new BinaryTree(value);
  }

  if (!this.left) {
    return this.left = value;
  }

  return this.left.appendLeft(value);
};

BinaryTree.prototype.appendRight = function(value) {
  if (!(value instanceof BinaryTree) && value !== null) {
    value = new BinaryTree(value);
  }

  if (!this.right) {
    return this.right = value;
  }

  return this.right.appendRight(value);
};

// ============== FIND VALUE ==============
BinaryTree.prototype.find = function(value) { // left-root-right
  let matchingElement = null;
  
  if (this.left) {
    matchingElement = this.left.find(value);
  }
  
  if (this.value === value && matchingElement === null) {
    matchingElement = this;
  }
  
  if (this.right && matchingElement === null) {
    matchingElement = this.right.find(value);
  }

  return matchingElement;
};

// ============== TO STRING ==============
BinaryTree.prototype.toString = function(string) { // root-left-right
  if (string === undefined) string = this.value;
  else string = `${string}\n${this.value}`;

  if (this.left) {
    string = this.left.toString(string);
  }
  
  if (this.right) {
    string = this.right.toString(string);
  }

  return string;
};

// ============== TO ARRAY ==============
BinaryTree.prototype.toArray = function(array) { //left-right-root
  if (array === undefined) array = [];

  if (this.left) {
    array = this.left.toArray(array);
  }

  if (this.right) {
    array = this.right.toArray(array);
  }

  array.push(this.value);

  return array;
};

module.exports = BinaryTree;
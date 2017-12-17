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

  this.left = value;
  return;
};

BinaryTree.prototype.addRight = function(value) {
  if (!(value instanceof BinaryTree) && value !== null) {
    value = new BinaryTree(value);
  }

  if (this.right) {
    throw new Error('right node already exists for this tree');
  }

  this.right = value;
  return;
};

// ============== ADD NEW LEAF'S ==============
BinaryTree.prototype.appendLeft = function(value) {
  if (!(value instanceof BinaryTree) && value !== null) {
    value = new BinaryTree(value);
  }
  if (!this.left) {
    return this.left = value;
  }
  this.left.appendLeft(value);
  return;
};

BinaryTree.prototype.appendRight = function(value) {
  if (!(value instanceof BinaryTree) && value !== null) {
    value = new BinaryTree(value);
  }
  if (!this.right) {
    return this.right = value;
  }
  this.right.appendRight(value);
  return;
};

// ============== FIND VALUE ==============
BinaryTree.prototype.find = function(value) { // left-root-right
  
  this.left.find(value);
  
  if (this.left === value) {
    return this.left;
  }
  if (this.right === value) {
    return this.right;
  }


  return 'value';
};

BinaryTree.prototype.toString = function(node) {

};

BinaryTree.prototype.toArray = function(node) {

};

module.exports = BinaryTree;
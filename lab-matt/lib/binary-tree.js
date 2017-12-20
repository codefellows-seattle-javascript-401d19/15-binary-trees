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
BinaryTree.prototype.toString = function() { // root-left-right
  return (function recurse(node, string) {
    if (string === undefined) string = node.value;
    else string = `${string}\n${node.value}`;

    if (node.left) {
      string = recurse(node.left, string);
    }
    
    if (node.right) {
      string = recurse(node.right, string);
    }

    return string;
  })(this);
};

// ============== TO ARRAY ==============
BinaryTree.prototype.toArray = function() { //left-right-root
  return (function recurse(node, array) {
    if (array === undefined) array = [];

    if (node.left) {
      array = recurse(node.left, array);
    }

    if (node.right) {
      array = recurse(node.right, array);
    }

    array.push(node.value);

    return array;
  })(this);
};

module.exports = BinaryTree;
'use strict';

const BinaryTree = function() {
  this.root = null;
};

const Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.insert = function(value) {
  const node = new Node(value);

  if (this.root === null) {
    this.root = node;
    return;
  }

  if (root.left === null) {
    root.left = node;
    return;
  }

  if (root.right === null) {
    root.right = node;
    return;
  }


};

BinaryTree.prototype.find = function(value) {
  // do something
};

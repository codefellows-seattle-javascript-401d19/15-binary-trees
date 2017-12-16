'use strict';

const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);

one.left = two;
one.right = three;

three.left = four;
three.right = five;


BinaryTree.prototype.find = function(value) {
  let found = null;

  const findRec = node => {
    if (node.left) {
      findRec(node.left);
    }

    if (node.value === value) {
      found = node;
    }

    if (node.right) {
      findRec(node.right);
    }

    return found;
  };

  return findRec(this);
};

BinaryTree.prototype.toString = function(str = '') {
  let builtStr = str;

  const toStringRec = node => {
    builtStr += `${node.value} \n`;

    if (node.left) {
      toStringRec(node.left);
    }

    if (node.right) {
      toStringRec(node.right);
    }

    return builtStr;
  };

  return toStringRec(this);
};

BinaryTree.prototype.toArray = function(arr = []) {
  let builtArr = arr;

  const toArrayRec = node => {
    if (node.left) {
      toArrayRec(node.left);
    }

    if (node.right) {
      toArrayRec(node.right);
    }

    builtArr.push(node);

    return builtArr;
  };

  return toArrayRec(this);
};

module.exports = BinaryTree;

'use strict';

const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.find = function(value) {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new TypeError('value must be a number');
  }

  let found = null;

  const findRec = node => {
    if (node.left && found === null) {
      findRec(node.left);
    }

    if (node.value === value && found === null) {
      found = node;
    }

    if (node.right && found === null) {
      findRec(node.right);
    }

    return found;
  };

  return findRec(this);
};

BinaryTree.prototype.toString = function(str = '') {
  if (typeof str !== 'string') {
    throw new TypeError('str must be a string');
  }

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
  if (!Array.isArray(arr)) {
    throw new TypeError('arr must be an array');
  }

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

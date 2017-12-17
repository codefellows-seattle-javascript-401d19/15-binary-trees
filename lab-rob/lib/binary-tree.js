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

};

module.exports = BinaryTree;


// let one, two, three, four, five, six, duplicateThree;

// one = new BinaryTree(2);
// two = new BinaryTree(2);
// three = new BinaryTree(3);
// four = new BinaryTree(3);
// five = new BinaryTree(2);
// six = new BinaryTree(3);
// duplicateThree = new BinaryTree(3);

// one.left = two;
// one.right = three;
// three.left = four;
// three.right = five;
// four.left = six;
// five.right = duplicateThree;

// console.log(five.find(3) === duplicateThree);

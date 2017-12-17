'use strict';

const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.find = function(value) {
  if(this.left) {
    this.left.find(value);
  }

  if(this.value === value) {
    console.log('found', this.value);
    return this;
  } else {
    console.log('visited', this.value);
  }

  if(this.right) {
    this.right.find(value);
  }
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

module.exports = BinaryTree;


// let one, two, three, four, five, six, duplicateThree;

// one = new BinaryTree(1);
// two = new BinaryTree(2);
// three = new BinaryTree(3);
// four = new BinaryTree(4);
// five = new BinaryTree(5);
// six = new BinaryTree(6);
// duplicateThree = new BinaryTree(3);

// one.left = two;
// one.right = three;
// three.left = four;
// three.right = five;
// four.left = six;
// five.right = duplicateThree;

// console.log(one.toString(''));

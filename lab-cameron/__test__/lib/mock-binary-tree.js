'use strict';

const BinaryTree = require('../../lib/binary-tree');

const BTtoTest = new BinaryTree(1)
const two = new BinaryTree(2);
const three = new BinaryTree(3);
const four = new BinaryTree(4);
const five = new BinaryTree(5);

BTtoTest.left = two;
BTtoTest.right = three;

three.left = four;
three.right = five;

module.exports = {
  BTtoTest,
  two,
  three,
  four,
  five,
};

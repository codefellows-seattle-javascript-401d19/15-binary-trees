'use strict';

const binaryTree = require('../lib/binary-tree');
const traverse = require('../lib/traversal');

describe('Traversal Testing', () => {
  let one = new binaryTree(1);
  let two = new binaryTree(2);
  let three = new binaryTree(3);
  let four = new binaryTree(4);
  let five = new binaryTree(5);
  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;

  test('pre order travesal test', () => {
    let pre = traverse.preOrderTraversal(one);
    console.log(pre);
  });

});

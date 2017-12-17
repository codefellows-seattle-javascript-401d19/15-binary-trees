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

  describe('Pre-Order Testing', () => {
    test('pre order travesal test should return a string', () => {
      let pre = traverse.preOrderTraversal(one);
      expect(pre).toEqual(1 + `\n` + 2 + `\n` + 3 + `\n` + 4 + `\n` + 5 + `\n`);
    });
    test('pre order travesal test should return an empty string if root is null', () => {
      let pre = traverse.preOrderTraversal(6);
      expect(pre).toEqual('');
    });
  });

  describe('Post-Order Testing', () => {
    test('post order travesal test should return an array', () => {
      let post = traverse.postOrderTraversal(one);
      expect(post).toEqual([2, 4, 5, 3, 1]);
    });
    test('post order travesal test should return an empty array if root is null', () => {
      let post = traverse.postOrderTraversal(6);
      expect(post).toEqual([]);
    });
  });

  describe('In-Order Testing should return the found value', () => {
    test('in order should return a found value', () => {
      let inOrder = traverse.inOrderTraversal(one, 3);
      expect(inOrder).toEqual(3);
    });
    test('in order should return null if value is not found', () => {
      let inOrder = traverse.inOrderTraversal(one, 6);
      expect(inOrder).toEqual(null);
    });
  });


});

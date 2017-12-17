'use strict';

const BinaryTree = require('../lib/binary-tree');

describe('binary-tree.js', () => {
  describe('BinaryTree constructor', () => {
    test('instantiation should result in an object with the specified value and null left and right properties.', () => {
      let myTree = new BinaryTree(73);
      expect(myTree).toBeTruthy();
      expect(myTree.value).toEqual(73);
      expect(myTree.left).toBeNull();
      expect(myTree.right).toBeNull();
    });
  });




});
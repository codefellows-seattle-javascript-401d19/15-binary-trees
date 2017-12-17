'use strict';

const BinaryTree = require('../lib/binary-tree');


describe('/lib/binary-tree', () => {
  describe('Binary Tree', () => {
    test('appendToHook', () => {
      let mockTree = new BinaryTree(10);
      mockTree.appendToHook(9, 10);
      expect(mockTree.left.value).toEqual(9);
    });
    test('appendToHook', () => {
      let mockTree = new BinaryTree(10);
      mockTree.appendToHook(9, 10);
      expect(mockTree.left.value).toEqual(9);
    });
    test('appendToHook', () => {
      let mockTree = new BinaryTree(10);
      mockTree.appendToHook(9, 10);
      expect(mockTree.left.value).toEqual(9);
    });
  });
});

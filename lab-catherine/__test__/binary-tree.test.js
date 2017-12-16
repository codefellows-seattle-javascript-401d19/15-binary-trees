'use strict';

const BinaryTree = require('../lib/binary-tree');

describe('binary-tree.js', () => {
  describe('FIND method should return the specified value', () => {

    test('should return first node with the passed in value in the binary tree', () => {
      expect(BinaryTree.prototype.find(2)).toEqual(2);
      expect(BinaryTree.prototype.find(3)).toEqual(3);
      expect(BinaryTree.prototype.find(4)).toEqual(4);
      
    });
  });
});
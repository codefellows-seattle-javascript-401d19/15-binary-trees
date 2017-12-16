'use strict';

let BinaryTree = require('../lib/binary-tree');

describe('binary-tree.js', () => {
  test('FIND method should return node with a specified value', () => {
    expect(BinaryTree.prototype.find(1)).toEqual(1);
    expect(BinaryTree.prototype.find(2)).toEqual(2);
    expect(BinaryTree.prototype.find(3)).toEqual(3);
    expect(BinaryTree.prototype.find(4)).toEqual(4);
  });
  test('FIND method should return null if value is not found', () => {
    expect(BinaryTree.prototype.find(6)).toEqual(null);

  });
  test('FIND method should throw error if value is not a number', () => {
    expect(() => BinaryTree.prototype.find('testing')).toThrow();
  });
});


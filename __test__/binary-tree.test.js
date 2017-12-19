'use strict';

const BinaryTree = require('../lib/binary-tree');

describe('binary-tree.js', () => {
  describe('FIND method should return the specified value', () => {

    test('should return first node with the passed in value in the binary tree', () => {
      expect(BinaryTree.prototype.find(2)).toEqual(2);
      expect(BinaryTree.prototype.find(3)).toEqual(3);
      expect(BinaryTree.prototype.find(4)).toEqual(4);
    });

    test('should return null if a node with the value is not found', () => {
      
      expect(BinaryTree.prototype.find(6)).toBeNull();
      expect(BinaryTree.prototype.find(9)).toBeNull();    
    });

    test('should throw an error if value is not a number', () => {
      
      expect(() =>
        BinaryTree.prototype.find('six')
      ).toThrow();   
      expect(() =>
        BinaryTree.prototype.find('one')
      ).toThrow();  
    });
  });

});
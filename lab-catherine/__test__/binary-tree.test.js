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
      
      expect(BinaryTree.prototype.find(6)).toEqual(null);
      expect(BinaryTree.prototype.find(9)).toEqual(null);    
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

  // describe('TOSTRING method should return the concatenated values separated by newlines in to a string', () => {
    
  //   test('should return the concatenated values separated by newlines in to a string', () => {
  //     expect(BinaryTree.prototype.toString(2)).toEqual('1\n2\n3\n4\n5');
          
  //   });
  // });

  describe('TOARRAY method should function properly', () => {
    
    test('should return an array with all of the elements in the binary tree', () => {
      expect(BinaryTree.prototype.toArray()).toEqual([2, 4, 5, 3, 1]);
          
    });

    test('should not be null', () => {
      expect(BinaryTree.prototype.toArray()).not.toBeNull();
          
    });
  });
});
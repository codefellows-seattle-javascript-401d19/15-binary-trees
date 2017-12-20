'use strict';

const BinaryTree = require('../lib/binary-tree');

describe('binary tree', () => {
  describe('create a new binary tree', () => {
    test('new BinaryTree(value) should return an object with {value,left,right} properties', () => {
      expect(new BinaryTree(10)).toEqual({value: 10, left: null, right: null});
    });
  });

  describe('.addLeft and .addRight', () => {
    test('.add to the left|right value will add a new sub-tree whether it is a new Instance or a value', () => {
      let Tree = new BinaryTree(1);
      Tree.addLeft(2);
      Tree.addRight(new BinaryTree(3));

      expect(Tree.left.value).toEqual(2);
      expect(Tree.right.value).toEqual(3);

      Tree.left.addLeft(new BinaryTree(4));
      Tree.left.addRight(5);
      
      expect(Tree.left.left.value).toEqual(4);
      expect(Tree.left.right.value).toEqual(5);
    });
  });
  
  describe('.appendLeft and .appendRight adds new leaf to left or right of tree|subtree', () => {
    test('.appendLeft creates a new left BinaryTree leaf', () => {
      let Tree = new BinaryTree(1);
      Tree.appendLeft(2);
      Tree.appendLeft(new BinaryTree(3));
      Tree.appendLeft(4);
      
      expect(Tree.left.value).toEqual(2);
      expect(Tree.left.left.value).toEqual(3);
      expect(Tree.left.left.left.value).toEqual(4);
      expect(Tree.right).toBe(null);
    });
    
    test('.appendRight creates a new right BinaryTree leaf', () => {
      let Tree = new BinaryTree(1);
      Tree.appendRight(2);
      Tree.appendRight(new BinaryTree(3));
      Tree.appendRight(4);
      
      expect(Tree.right.value).toEqual(2);
      expect(Tree.right.right.value).toEqual(3);
      expect(Tree.right.right.right.value).toEqual(4);
      expect(Tree.left).toBe(null);
    });
  });

  describe('.find(value)', () => {
    test('.find(value) should find the value given of a binaryTree', () => {
      let Tree = new BinaryTree(1);
      let two = new BinaryTree(2);
      let three = new BinaryTree(3);
      let four = new BinaryTree(4);
      let five = new BinaryTree(5);
      
      Tree.appendRight(two);
      Tree.appendRight(three);
      Tree.appendRight(four);
      Tree.appendLeft(five);      

      expect(Tree.find(1)).toEqual(Tree);
      expect(Tree.find(2)).toEqual(two);
      expect(Tree.find(3)).toEqual(three);
      expect(Tree.find(4)).toEqual(four);      
      expect(Tree.find(5)).toEqual(five);  
      expect(Tree.find(100000)).toEqual(null);    
    });
  });

  describe('.toString()', () => {
    test('.toString should return a concatenation of the values of a tree with a \\n', () => {
      let Tree = new BinaryTree(1);
      let two = new BinaryTree(2);
      let three = new BinaryTree(3);
      let four = new BinaryTree(4);
      let five = new BinaryTree(5);
      Tree.appendRight(two);
      Tree.appendRight(three);
      Tree.appendRight(four);
      Tree.appendLeft(five);      

      expect(Tree.toString()).toEqual('1\n5\n2\n3\n4');    
    });
  });

  describe('.toArray()', () => {
    test('.toArray should return a an array of all the values', () => {
      let Tree = new BinaryTree(1);
      let two = new BinaryTree(2);
      let three = new BinaryTree(3);
      let four = new BinaryTree(4);
      Tree.appendLeft(two);
      Tree.appendRight(three);
      Tree.appendLeft(four);

      expect(Tree.toArray()).toEqual([4, 2, 3, 1]);
    });
  });

  describe('TESTING ERRORS', () => {
    test('.addLeft/Right should return an error if trying to add another immediate left or right value', () => {
      let Tree = new BinaryTree(1);
      Tree.addLeft(2);
      Tree.addRight(3);

      expect(() => {
        Tree.addLeft(10);    
      }).toThrow();

      expect(() => {
        Tree.addRight(10);    
      }).toThrow();
    });
  });
});

'use strict';
const BinaryTree = require('../lib/binary-tree');

const treeBuilder = () => {
  let one = new BinaryTree(1);
  let two = new BinaryTree(2);
  let three = new BinaryTree(3);
  let four = new BinaryTree(4);
  let five = new BinaryTree(5);
  let six = new BinaryTree(6);
  let seven = new BinaryTree(7);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  four.left = six;
  four.right = seven;
  return one;
};

describe('Binary Tree JS Functions', () => {
  // afterEach(() => binaryTree.remove({}));
  describe('Find() prototype', () => {
    test('This test should pass when a normal case value is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find(6)).toEqual(tree.right.left.left);
      expect(tree.find(7)).toEqual(tree.right.left.right);
      expect(tree.find(1)).toEqual(tree);
    });
    
    test(' This test should PASS if a non-number is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find(null)).toBeNull();
      expect(tree.find('string')).toBeNull();
    });

    test(' This test should PASS if the value searched for does not exist in the tree', () => {
      let tree = treeBuilder();
      expect(tree.find(10)).toBeNull();
      expect(tree.find(-10)).toBeNull();
    });
  });

  describe('ToString() prototype', () => {
    test('This test should pass and return a string when called on a binary tree', () => {
      let tree = treeBuilder();
      expect(tree.toString()).toEqual('1\n2\n3\n4\n6\n7\n5');
    });
  });

  describe('ToArray() prototype', () => {
    test('This test should pass and return an array when called on a binary tree', () => {
      let tree = treeBuilder();
      expect(tree.toArray()).toEqual([2,6,7,4,5,3,1]);
    });
  });
});
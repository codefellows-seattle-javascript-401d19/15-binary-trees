
'use strict';
const binaryTree = require('../lib/binary-tree');

const treeBuilder = () => {
  let one = new binaryTree.BinaryTree(1);
  let two = new binaryTree.BinaryTree(2);
  let three = new binaryTree.BinaryTree(3);
  let four = new binaryTree.BinaryTree(4);
  let five = new binaryTree.BinaryTree(5);
  let six = new binaryTree.BinaryTree(6);
  let seven = new binaryTree.BinaryTree(7);

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

});
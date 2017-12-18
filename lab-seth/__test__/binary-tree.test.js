
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

    })
    test(' This test should PASS if value that does not exist in the tree is searched for', () => {

    })
    test(' This test should PASS if the Binary Tree find() prototype is setup correctly', () => {

    });
  });

});
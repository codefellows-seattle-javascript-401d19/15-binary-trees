
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
      console.log('tree: ',tree);
      console.log('tree: ',tree.find(6));
      expect(tree.find(6)).toEqual(tree.right.left.left);

    })
    test(' This test should PASS if the Binary Tree find() prototype is setup correctly', () => {

    })
    test(' This test should PASS if the Binary Tree find() prototype is setup correctly', () => {

    });
  });

});
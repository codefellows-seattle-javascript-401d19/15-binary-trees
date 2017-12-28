
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
    test('This test should return a node that has the value searched for', () => {
      let tree = treeBuilder();
      expect(tree.find(6)).toEqual(tree.right.left.left);
      expect(tree.find(7)).toEqual(tree.right.left.right);
      expect(tree.find(1)).toEqual(tree);
    });
    
    test(' This test should return null if a non-number is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find(null)).toBeNull();
      expect(tree.find('string')).toBeNull();
    });

    test(' This test should return null if the value searched for does not exist in the tree', () => {
      let tree = treeBuilder();
      expect(tree.find(10)).toBeNull();
      expect(tree.find(-10)).toBeNull();
    });
  });

  describe('ToString() prototype', () => {
    test('This test should return a string when called on the first node of a binary tree', () => {
      let tree = treeBuilder();
      expect(tree.toString()).toEqual('1\n2\n3\n4\n6\n7\n5');
    });

    test('This test should return a concatinated string when called on the first node of a binary tree and when passed a starting string', () => {
      let tree = treeBuilder();
      expect(tree.toString('stuff')).toEqual('stuff\n1\n2\n3\n4\n6\n7\n5');
    });

    test('This test should return a string when called on any node but the first node of a binary tree', () => {
      let tree = treeBuilder();
      expect(tree.left.toString()).toEqual('2');
    });
  });

  describe('ToArray() prototype', () => {
    test('This test should return an array of all the values of the nodes if this method is called on the first node of a binary tree and no array is passed as an argument', () =>{
      let tree = treeBuilder();
      expect(tree.toArray()).toEqual([2, 6, 7, 4, 5, 3, 1]);
    });

    test('This test should return an array when called on a binary tree that has the values of the nodes pushed onto the original array passed in as an argument', () => {
      let tree = treeBuilder();
      expect(tree.toArray([123])).toEqual([123,2,6,7,4,5,3,1]);
    });

    test('This test should return an array when called on any node but the first node of a binary tree', () => {
      let tree = treeBuilder();
      expect(tree.left.toArray()).toEqual([2]);
    });
  });
});
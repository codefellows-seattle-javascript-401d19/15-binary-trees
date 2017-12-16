'use strict';
let BinaryTree = require(`../lib/binaryTrees`);

describe(`binaryTree.js`, () => {
  let zero = new BinaryTree(0);
  let one = new BinaryTree(1);
  let three = new BinaryTree(3);
  let seven = new BinaryTree(7);
  let eight = new BinaryTree(8);
  let ten = new BinaryTree(10);

  one.right = three;
  one.left = zero;
  zero.left = seven;
  three.left = ten;
  three.right = eight;

  describe(`Find method`, () => {
    test.only(`The .find method should return the node with the specified value if there are no errors`, () => {
      expect(one.find(3).value).toEqual(3);
    });
    test(`The .find should return null if no node was found with the specified value`, () => {
      expect(one.find(22)).toBeNull();
    });
  });

  // describe(`toString method`, () => {
  //   test(`The toString method should return a string of all the elements in a pre-order traversal order`, () => {
  //     expect(one.toString('')).toEqual('1\n0\n7\n3\n10\n8');
  //   });
  // });

  // describe(`toArray method`, () => {
  //   test(`The toArray method should return an array with all elements in a post-order traversal order`, () => {
  //     expect(one.toArray([])).toEqual([7,0,1,10,8,3]);
  //   });
  // });
});

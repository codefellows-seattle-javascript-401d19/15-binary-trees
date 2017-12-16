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

  test(`The .find method should return the node with the specified value if there are no errors`, () => {
    expect().toEqual();
  });
  test.only(`The .find should return null if no node was found with the specified value`, () => {
    expect(one.find(22)).toBeNull();
  })
});

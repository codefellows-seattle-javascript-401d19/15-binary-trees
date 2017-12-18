// tests : at least 3 unit tests (2 normal case and one edge case) for every implemented method

'use strict';

const BinaryTree = require('../lib/index');

const testTree = () => {
  let one = new BinaryTree(1);
  let two = new BinaryTree(2);
  let three = new BinaryTree(3);
  let four = new BinaryTree(4);
  let five = new BinaryTree(5);
  let six = new BinaryTree(6);

  one.left = two;
  one.right = three;

  two.left = four;
  two.right = five;

  three.right = six;
};

describe('binary tree - lib/index.js', () => {
  beforeEach(testTree);

  // test find method 
  test(`find prototype should iterate over all the child nodes using 'in-order' traversal and return the first node value that has a value`, () => {
    expect(testTree.find(root).toEqual('four'));
  });

  test(`find prototype should iterate over all the child nodes using 'in-order' traversal and return null if a node with a value is not found`, () => {
    // let testTree = ;
    expect(testTree.find(root).toEqual('null'));
  });


  // test toString method
  test(`toString prototype should iterate over all the child nodes using 'pre-order' traversal and concatenate their values into a string separated by newlines`, () => {
    expect(testTree.toString(root).toEqual(`\n1, \n2, \n5, \n4, \n3, \n6`));
  });


  // test toArray method
  test(`toArray method should iterate over all the child nodes using 'post-order' traversal and push all the trees elements into an array`, () => {
    expect(testTree.find(root).toEqual(`[4, 2, 5, 1, 3, 6]`));
  });
});
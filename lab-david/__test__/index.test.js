// tests : at least 3 unit tests (2 normal case and one edge case) for every implemented method

'use strict';

const index = require('../lib/index');

describe('binary tree - lib/index.js', () => {

  // test find method 
  test(`find prototype should iterate over all the child nodes using 'in-order' traversal and return the first node value that has a value`, () => {
    expect(index.binaryTree.find(root).toEqual('four'));
  });

  test(`find prototype should iterate over all the child nodes using 'in-order' traversal and return null if a node with a value is not found`, () => {
    let testTree = ;
    expect(index.binaryTree.find(root).toEqual('null'));
  });


  // test toString method
  test(`toString prototype should iterate over all the child nodes using 'pre-order' traversal and concatenate their values into a string separated by newlines`, () => {
    expect(index.binaryTree.toString(root).toEqual(`\n1, \n2, \n5, \n4, \n3, \n6`));
  });


  // test toArray method
  test(`toArray method should iterate over all the child nodes using 'post-order' traversal and push all the trees elements into an array`, () => {
    expect(index.binaryTree.find(root).toEqual(`[4, 2, 5, 1, 3, 6]`));
  });
});
// tests : at least 3 unit tests (2 normal case and one edge case) for every implemented method

'use strict';

const index = require('../lib/index');

describe('binary tree - index.js', () => {
  test(`find method should iterate over all the child nodes using 'in-order' traversal and return the first node value`, () => {
    expect(index.binaryTree.find(root).toEqual('two'));
  });

  // test find method 
  test(`find prototype should iterate over all the child nodes using 'in-order' traversal and return the first node value`, () => {
    expect(index.binaryTree.find(root).toEqual('two'));
  });

  // test toString method
  test(`toString prototype should iterate over all the child nodes using 'pre-order' traversal and concatenate their values into a string separated by newlines`, () => {
    expect(index.binaryTree.toString(root).toEqual(`1\n2\n3\n4\n5\n6`));
  });


  // test toArray method
  test(`toArray method should iterate over all the child nodes using 'post-order' traversal and push all the trees elements into an array`, () => {
    expect(index.binaryTree.find(root).toEqual(`[]`));
  });
});
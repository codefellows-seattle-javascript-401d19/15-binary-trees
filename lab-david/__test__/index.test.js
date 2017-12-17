// tests : at least 3 unit tests (2 normal case and one edge case) for every implemented method

'use strict';

const index = require('/.index');

describe('binary tree - index.js', () => {
  test(`find method should iterate over all the child nodes using 'in-order' traversal and return the first node value`, () => {
    expect(index.binaryTree.find().toEqual('two'));
  });
});

// test find method 


// test toString method


// test toArray method
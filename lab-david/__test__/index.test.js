'use strict';

const BinaryTree = require('../lib/index');


describe('binary tree - lib/index.js', () => {
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


  // test find method 
  test(`find prototype should iterate over all the child nodes using 'in-order' traversal and return the first node value that has a value`, () => {
    expect(one.find(1)).toEqual(one);
    expect(one.find(3)).toEqual(three);

  });

  test(`find prototype should iterate over all the child nodes using 'in-order' traversal and return null if a node with a value is not found | edge case`, () => {
    expect(one.find(100)).toEqual(null);
  });

  // test toString method
  test(`toString prototype should iterate over all the child nodes using 'pre-order' traversal and concatenate their values into a string separated by newlines`, () => {
    expect(one.toString()).toEqual(`1\n2\n4\n5\n3\n6`);
    expect(two.toString()).toEqual(`2\n4\n5`);
  });

  test(`toString prototype should iterate over all the child nodes using 'pre-order' traversal and return null if not given a thing | edge case`, () => {
    expect(four.toString()).toEqual(`4`);
  });

  // test toArray method
  test(`toArray method should iterate over all the child nodes using 'post-order' traversal and push all the trees elements into an array`, () => {
    expect(one.toArray([])).toEqual([4, 5, 2, 6, 3, 1]);
    expect(two.toArray([])).toEqual([4, 5, 2]);
  });

  test(`toArray method should iterate over all the child nodes using 'post-order' traversal and push all the trees elements into an array | edge case`, () => {
    expect(four.toArray([])).toEqual([4]);
  });

});
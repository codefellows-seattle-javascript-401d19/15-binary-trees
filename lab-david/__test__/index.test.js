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
  });

  test(`find prototype should iterate over all the child nodes using 'in-order' traversal and return null if a node with a value is not found`, () => {
    expect(one.find(100)).toEqual(null);
  });

  // TODO : write another test for find proto - edge case



  // test toString method
  test(`toString prototype should iterate over all the child nodes using 'pre-order' traversal and concatenate their values into a string separated by newlines`, () => {
    expect(one.toString(1).toEqual(`\n1, \n2, \n5, \n4, \n3, \n6`));
  });

  // TODO : write another test for toString - normal case

  // TODO : write another test for toString - edge case



  // test toArray method
  test(`toArray method should iterate over all the child nodes using 'post-order' traversal and push all the trees elements into an array`, () => {
    expect(one.find(1).toEqual(`[4, 2, 5, 1, 3, 6]`));
  });
});

  // TODO : write another test for toArray - normal case

    // TODO : write another test for toArray - edge case


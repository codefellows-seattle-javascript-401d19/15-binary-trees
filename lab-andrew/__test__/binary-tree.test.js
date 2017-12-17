'use strict';

const BinaryTree = require('../lib/binary-tree');

describe('lib/binary-tree.js', () => {
  const one = new BinaryTree(1);
  const two = new BinaryTree(2);
  const three = new BinaryTree(3);
  const four = new BinaryTree(4);
  const five = new BinaryTree(5);
  const six = new BinaryTree(6);

  one.left = two;
  one.right = three;
  three.right = four;
  four.left = five;
  four.right = six;
  test('binary tree in order find, normal cases', () => {
    expect(one.findInOrder(3)).toEqual(three);
    expect(one.findInOrder(5)).toEqual(five);
  });

  test('binary tree in order find, edge case', () => {
    expect(one.findInOrder(7)).toBeNull();
  });

  test('binary tree pre order toString, normal cases', () => {
    expect(one.preOrderToString()).toEqual('1\n2\n3\n4\n5\n6');
    expect(four.preOrderToString()).toEqual('4\n5\n6');
  });

  test('binary tree pre order toString, edge cases', () => {
    expect(three.preOrderToString()).toEqual('3\n4\n5\n6');
    expect(six.preOrderToString()).toEqual('6');
  });

  test('binary tree post order array, normal cases', () => {
    expect(one.postOrderToArray()).toEqual([2, 5, 6, 4, 3, 1]);
    expect(four.postOrderToArray()).toEqual([5, 6, 4]);
  });

  test('binary tree post order array, edge cases', () => {
    expect(three.postOrderToArray()).toEqual([5, 6, 4, 3]);
    expect(six.postOrderToArray()).toEqual([6]);
  });
});

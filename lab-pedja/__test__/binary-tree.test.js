'use strict';

let BinaryTree = require('../lib/binary-tree');
let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);

one.left = two;
one.right = three;
three.left = four;
three.right = five;

describe('binary-tree.js', () => {
  test('FIND method should return node with a specified value', () => {
    expect(one.find(2)).toEqual(two);
    expect(one.find(3)).toEqual(three);
  });
 
  test('FIND method should throw error if value is not a number', () => {
    expect(() => BinaryTree.prototype.find('testing')).toThrow();
  });

  test('TOSTRING method should return node\'s concatenated values separated by newlines in to a string', () => {
    expect(one.toString('')).toEqual('1\n2\n3\n4\n5\n');
  });

  test('TOSTRING method should throw error if value is not a string', () => {
    expect(() => one.prototype.toString(12345)).toThrow();
  });

  test('TOARRAY method should return array of values using POST order traversal', () => {
    expect(one.toArray([])).toEqual([2, 4, 5, 3, 1]);
  });

  test('TOARRAY method should throw an error if array is not provided', () => {
    expect(() => one.toArray('testing')).toThrow();
  });
});
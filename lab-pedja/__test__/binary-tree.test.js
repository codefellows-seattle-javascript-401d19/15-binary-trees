'use strict';

let BinaryTree = require('../lib/binary-tree');
let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let str = '';

one.left = two;
one.right = three;
three.left = four;
three.right = five;

describe('binary-tree.js', () => {
  test('FIND method should return node with a specified value', () => {
    expect(one.find(2)).toEqual(two);
  });
 
  test('FIND method should throw error if value is not a number', () => {
    expect(() => BinaryTree.prototype.find('testing')).toThrow();
  });

  test('TOSTRING method should return node\'s concatenated values separated by newlines in to a string', () => {
    expect(one.toString()).toEqual('1\n2\n3\n4\n5');
  });
});
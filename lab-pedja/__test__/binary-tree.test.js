'use strict';

let BinaryTree = require('../lib/binary-tree');

describe('binary-tree.js', () => {
  test('FIND method should return node with a specified value', () => {
    expect(BinaryTree.prototype.find(1)).toEqual(1);
    expect(BinaryTree.prototype.find(2)).toEqual(2);
    expect(BinaryTree.prototype.find(3)).toEqual(3);
    expect(BinaryTree.prototype.find(4)).toEqual(4);
  });
  test('FIND method should return null if value is not found', () => {
    expect(BinaryTree.prototype.find(6)).toEqual(null);

  });
  test('FIND method should throw error if value is not a number', () => {
    expect(() => BinaryTree.prototype.find('testing')).toThrow();
  });

  test('TOSTRING method should return node\'s concatenated values separated by newlines in to a string', () => {
    let one = new BinaryTree(1);
    let two = new BinaryTree(2);
    let three = new BinaryTree(3);
    let four = new BinaryTree(4);
    let five = new BinaryTree(5);
    
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    expect(one.toString()).toEqual('1\n2\n3\n4\n5');
    
  });
 
});


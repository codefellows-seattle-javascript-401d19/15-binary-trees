'use strict';

const BinaryTree = require('../lib/binary-tree');

const BTtoTest = new BinaryTree(1)
const two = new BinaryTree(2);
const three = new BinaryTree(3);
const four = new BinaryTree(4);
const five = new BinaryTree(5);

BTtoTest.left = two;
BTtoTest.right = three;

three.left = four;
three.right = five;

describe('BinaryTree.js', () => {
  describe('BinaryTree.find(<value>)', () => {
    test('should return node with specified value if it exists in tree', () => {
      expect(BTtoTest.find(1)).toEqual(BTtoTest);
      expect(BTtoTest.find(2)).toEqual(two);
      expect(BTtoTest.find(3)).toEqual(three);
      expect(BTtoTest.find(4)).toEqual(four);
      expect(BTtoTest.find(5)).toEqual(five);
    });
  });
});

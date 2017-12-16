'use strict';

const { BTtoTest, two, three, four, five } = require('./lib/mock-binary-tree');

describe('BinaryTree.js', () => {
  describe('BinaryTree.find(<value>)', () => {
    test('should return node with specified value to find exists in tree', () => {
      expect(BTtoTest.find(1)).toEqual(BTtoTest);
      expect(BTtoTest.find(2)).toEqual(two);
      expect(BTtoTest.find(3)).toEqual(three);
      expect(BTtoTest.find(4)).toEqual(four);
      expect(BTtoTest.find(5)).toEqual(five);
    });

    test('should return null if specified value to find does not exist in tree', () => {
      expect(BTtoTest.find(6)).toBeNull();
    });

    test('should return null if specified value to find is not a number', () => {
      expect(BTtoTest.find(NaN)).toBeNull();
    });
  });

  describe('BinaryTree.toString(<value>)', () => {
    test('should return strings found on BinaryTree organized by pre-order and separated by new lines', () => {
      const expected = '1 \n2 \n3 \n4 \n5 \n';

      expect(BTtoTest.toString('')).toEqual(expected);
    });

    test('should concat passed in value with values found on pre-order traversed nodes', () => {
      const expected = 'test1 \n2 \n3 \n4 \n5 \n';

      expect(BTtoTest.toString('test')).toEqual(expected);
    });
  });

  describe('BinaryTree.toString()', () => {
    test('should return strings found on BinaryTree organized by pre-order and separated by new lines', () => {
      const expected = '1 \n2 \n3 \n4 \n5 \n';

      expect(BTtoTest.toString()).toEqual(expected);
    });
  });

});

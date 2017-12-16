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

    test('should throw if specified value to find is not a number', () => {
      expect(() => {
        BTtoTest.find('not a number');
      }).toThrow();

      expect(() => {
        BTtoTest.find(NaN);
      }).toThrow();
    });
  });

  describe('BinaryTree.toString(<string>)', () => {
    test('should return strings found on BinaryTree organized by pre-order and separated by new lines', () => {
      const expected = '1 \n2 \n3 \n4 \n5 \n';

      expect(BTtoTest.toString('')).toEqual(expected);
    });

    test('should concat passed in string with values found on pre-order traversed nodes', () => {
      const expected = 'test1 \n2 \n3 \n4 \n5 \n';

      expect(BTtoTest.toString('test')).toEqual(expected);
    });

    test('should throw if specified string is not of type string', () => {
      const notAString = 100;

      expect(() => {
        BTtoTest.toString(notAString);
      }).toThrow();
    });
  });

  describe('BinaryTree.toString()', () => {
    test('should return strings found on BinaryTree organized by pre-order and separated by new lines', () => {
      const expected = '1 \n2 \n3 \n4 \n5 \n';

      expect(BTtoTest.toString()).toEqual(expected);
    });
  });

  describe('BinaryTree.toArray(<array>)', () => {
    test('should return an array of nodes on BinaryTree assembled via post-order traversal', () => {
      const expected = [two, four, five, three, BTtoTest];

      expect(BTtoTest.toArray([])).toEqual(expected);
    });

    test('should return an array of nodes on BinaryTree assembled via post-order traversal', () => {
      const expected = ['test', two, four, five, three, BTtoTest];

      expect(BTtoTest.toArray(['test'])).toEqual(expected);
    });

    test('should throw if specified array is not an array', () => {
      expect(() => {
        BTtoTest.toArray('not an array');
      }).toThrow();
    });
  });

  describe('BinaryTree.toArray()', () => {
    test('should return an array of nodes on BinaryTree assembled via post-order traversal', () => {
      const expected = [two, four, five, three, BTtoTest];

      expect(BTtoTest.toArray()).toEqual(expected);
    });
  });
});

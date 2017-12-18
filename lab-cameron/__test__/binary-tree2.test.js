'use strict';

const BinaryTree2 = require('../lib/binary-tree2.js');

const BTtoTest = new BinaryTree2();

BTtoTest.insert(1);
BTtoTest.insert(2);
BTtoTest.insert(3);
BTtoTest.insert(4);
BTtoTest.insert(5);
BTtoTest.insert(6);
BTtoTest.insert(7);

describe('binary-tree2.js', () => {
  describe('BinaryTree2.insert(<value>)', () => {
    test('should insert values in a breadth-first order into tree', () => {
      const NodeList = BTtoTest.find(1);
      const expected1 = BTtoTest.find(1);
      const expected2 = BTtoTest.find(2);
      const expected3 = BTtoTest.find(3);
      const expected4 = BTtoTest.find(4);
      const expected5 = BTtoTest.find(5);
      const expected6 = BTtoTest.find(6);
      const expected7 = BTtoTest.find(7);

      expect(NodeList).toEqual(expected1);
      expect(NodeList.left).toEqual(expected2);
      expect(NodeList.right).toEqual(expected3);
      expect(NodeList.left.left).toEqual(expected4);
      expect(NodeList.left.right).toEqual(expected5);
      expect(NodeList.right.left).toEqual(expected6);
      expect(NodeList.right.right).toEqual(expected7);

      expect(NodeList.left.left.left).toBeNull();
      expect(NodeList.left.left.right).toBeNull();
      expect(NodeList.left.right.left).toBeNull();
      expect(NodeList.left.right.right).toBeNull();
      expect(NodeList.right.left.left).toBeNull();
      expect(NodeList.right.left.right).toBeNull();
      expect(NodeList.right.right.left).toBeNull();
      expect(NodeList.right.right.right).toBeNull();
    });
  });
});

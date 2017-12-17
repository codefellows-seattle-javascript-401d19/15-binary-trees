'use strict';

const BinaryTree = require('../lib/binary-tree');


describe('/lib/binary-tree', () => {
  describe('Binary Tree', () => {
    test('appendToHook', () => {
      let mockTree = new BinaryTree(10);
      mockTree.appendToHook(9, 10);
      expect(mockTree.left.value).toEqual(9);
    });
    test.only('inOrderFind', () => {
      let inOrderFindTree = new BinaryTree(10);
      inOrderFindTree.append(9);
      inOrderFindTree.append(8);
      inOrderFindTree.append(7);
      inOrderFindTree.append(6);
      inOrderFindTree.append(5);
      inOrderFindTree.append(4);
      inOrderFindTree.append(3);
      inOrderFindTree.append(2);
      inOrderFindTree.append(1);
      expect(inOrderFindTree.inOrderFind(3).value).toEqual(3);

    });
    // test('appendToHook', () => {
    //   let mockTree = new BinaryTree(10);
    //   mockTree.appendToHook(9, 10);
    //   expect(mockTree.left.value).toEqual(9);
    // });
  });
});

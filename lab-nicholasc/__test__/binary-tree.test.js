'use strict';

const BinaryTree = require('../lib/binary-tree');


describe('/lib/binary-tree', () => {
  describe('Binary Tree', () => {
    test('appendToHook', () => {
      let mockTree = new BinaryTree(10);
      mockTree.appendToHook(9, 10);
      mockTree.appendToHook(8, 9);
      mockTree.appendToHook(7, 9);
      expect(mockTree.left.value).toEqual(9);
    });
    test('inOrderFind', () => {
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
    test('preOrderToString', () => {
      let preOrderStringTree = new BinaryTree(10);
      preOrderStringTree.appendToHook(9, 10);
      preOrderStringTree.appendToHook(8, 9);
      preOrderStringTree.appendToHook(7, 8);
      preOrderStringTree.appendToHook(6, 9);
      preOrderStringTree.appendToHook(5, 8);
      preOrderStringTree.appendToHook(4, 5);
      preOrderStringTree.appendToHook(3, 4);

      expect(preOrderStringTree.preOrderToString()).toEqual('10 9 8 7 5 4 3 6');
    });
    test.only('postOrderToString', () => {
      let postOrderStringTree = new BinaryTree(10);
      postOrderStringTree.appendToHook(9, 10);
      postOrderStringTree.appendToHook(8, 9);
      postOrderStringTree.appendToHook(7, 8);
      postOrderStringTree.appendToHook(6, 9);
      postOrderStringTree.appendToHook(5, 8);
      postOrderStringTree.appendToHook(4, 5);
      postOrderStringTree.appendToHook(3, 4);

      expect(postOrderStringTree.preOrderToString()).toEqual('10 9 8 7 5 4 3 6');
    });
  });
});

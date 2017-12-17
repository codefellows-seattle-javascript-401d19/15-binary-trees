'use strict';

const BinaryTree = require('../lib/binary-tree');

describe('binary tree', () => {
  describe('create a new binary tree', () => {
    test('binaryTree.create(value) should return an object with {value,left,right} properties', () => {
      expect(new BinaryTree(10)).toEqual({value: 10, left: null, right: null});
    });
  });

  describe('.addLeft and .addRight', () => {
    test('.add to the left|right value will add a new sub-tree whether it is a new Instance or a value', () => {
      let Tree = new BinaryTree(1);
      Tree.addLeft(2);
      Tree.addRight(new BinaryTree(3));

      expect(Tree.left.value).toEqual(2);
      expect(Tree.right.value).toEqual(3);

      Tree.left.addLeft(new BinaryTree(4));
      Tree.left.addRight(5);
      
      expect(Tree.left.left.value).toEqual(4);
      expect(Tree.left.right.value).toEqual(5);
    });
  });
  
  test('.appendLeft creates a new left BinaryTree leaf', () => {
    let Tree = new BinaryTree(1);
    Tree.appendLeft(2);
    Tree.appendLeft(new BinaryTree(3));
    Tree.appendLeft(4);
    
    expect(Tree.left.value).toEqual(2);
    expect(Tree.left.left.value).toEqual(3);
    expect(Tree.left.left.left.value).toEqual(4);
    expect(Tree.right).toBe(null);
  });

  test('.appendRight creates a new right BinaryTree leaf', () => {
    let Tree = new BinaryTree(1);
    Tree.appendRight(2);
    Tree.appendRight(new BinaryTree(3));
    Tree.appendRight(4);
    
    expect(Tree.right.value).toEqual(2);
    expect(Tree.right.right.value).toEqual(3);
    expect(Tree.right.right.right.value).toEqual(4);
    expect(Tree.left).toBe(null);
  });

  // test('.find(value) should find the value given of a binaryTree', () => {
  //   expect(new BinaryTree(10).find(10)).toEqual('value');
  // });
});
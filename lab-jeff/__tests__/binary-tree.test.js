'use strict';

const BinaryTree = require('../binary-tree');

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let fourAlso = new BinaryTree(4);
one.left = two;
one.right = three;
three.left = four;
three.right = fourAlso;



describe('index.js', () => {
  describe('find', () => {
    test('find should return the node containing "3"', () => {

      expect(one.find(3)).toBe(three);

    });

    test('find should return the root node', () => {
      expect(one.find(1)).toBe(one);
    });

    test('find should return the first node containing "4"', () => {
      expect(one.find(4)).toBe(four);
    });
    test('find should return the first node containing "4"', () => {
      expect(one.find(10)).toBeNull();
    });

  });
  describe('string', () => {
    test('should return a string of values in Pre-order with a hard return after each number.  Calling root node', () => {
      expect(one.toString()).toEqual('1\n2\n3\n4\n4\n');
    });

    test('should return a single value followed by a hard return if called on node with no children', () => {
      expect(two.toString()).toEqual('2\n');
    });
    test('should return a string of values in Pre-order with a hard return after each number.  Calling inner node with children', () => {
      expect(three.toString()).toEqual('3\n4\n4\n');
    });
  });

  describe('array', () => {
    test('should return an array of values in Post-order.  Calling root node', () => {
      expect(one.toArray()).toEqual([2, 4, 4, 3, 1]);
    });

    test('should return an array with a single value if called on node with no children', () => {
      expect(two.toArray()).toEqual([2]);
    });
    test('should return an array of values in Post-order.  Calling inner node with children', () => {
      expect(three.toArray()).toEqual([4,4,3]);
    });
  });

});

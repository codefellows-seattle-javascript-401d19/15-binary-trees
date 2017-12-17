'use strict';

const BinaryTree = require('../lib/binary-tree');
let one, two, three, four, five, six, duplicateThree;
const setup = () => {
  one = new BinaryTree(1);
  two = new BinaryTree(2);
  three = new BinaryTree(3);
  four = new BinaryTree(4);
  five = new BinaryTree(5);
  six = new BinaryTree(6);
  duplicateThree = new BinaryTree(3);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  four.left = six;
  five.right = duplicateThree;
};

describe('binary-tree.js', () => {
  describe('BinaryTree constructor', () => {
    test('instantiation should result in an object with the specified value and null left and right properties.', () => {
      let myTree = new BinaryTree(73);
      expect(myTree).toBeTruthy();
      expect(myTree.value).toEqual(73);
      expect(myTree.left).toBeNull();
      expect(myTree.right).toBeNull();
    });
  });

  describe('BinaryTree methods', () => {
    beforeEach(setup);

    describe('find(value)', () => {
      test('find should return the node containing a unique value.', () => {
        expect(one.find(4)).toEqual(four);
        expect(four.find(6)).toEqual(six);
      });

      test('find should return the calling node if the calling node has the desired value', () => {
        expect(one.find(1)).toEqual(one);
        expect(six.find(6)).toEqual(six);
      });

      test('find should return the first node with the desired value, even if there is a duplicate down the tree.', () => {
        expect(one.find(3)).toEqual(three);
        expect(three.find(3)).toEqual(three);
        expect(five.find(3)).toEqual(duplicateThree);
      });

      test('find should return null if no node has the requested value', () => {
        expect(one.find('nope')).toBeNull();
        expect(three.find('nope')).toBeNull();
      });


    });

    describe.only('toString(str)', () => {
      test('toString should return a concatenated string of all values using a pre-order traversal if an empty string is provided', () => {
        expect(one.toString('')).toEqual('1\n2\n3\n4\n6\n5\n3');
        expect(four.toString('')).toEqual('4\n6');
        expect(six.toString('')).toEqual('6');
      });

      test('toString should provide an empty string to start if no string is provided.', () => {
        expect(one.toString()).toEqual('1\n2\n3\n4\n6\n5\n3');
        expect(four.toString()).toEqual('4\n6');
        expect(six.toString()).toEqual('6');
      });

      test('toString should concatenate to the end of the provided string if a nonempty string is provided.', () => {
        expect(one.toString('hey')).toEqual('hey\n1\n2\n3\n4\n6\n5\n3');
        expect(four.toString('there')).toEqual('there\n4\n6');
        expect(six.toString('bob')).toEqual('bob\n6');
      });

      test('toString should throw an error if a non-string is provided as argument', () => {
        expect(() => {
          one.toString(9);
        }).toThrow();
      });


    });

    
  });


});
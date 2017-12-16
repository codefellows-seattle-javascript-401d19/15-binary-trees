'use strict';

const BinaryTree = require('../binary-tree');

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(4);
one.left = two;
one.right = three;
three.left = four;
three.right = five;
let str = '';


describe('index.js', () => {
  describe('find', () => {
    test('find should return the node containing "3"', () => {

      expect(one.find(3)).toBe(three);

    });

    test.only('find should return the node containing "4"', () => {
      expect(one.find(4)).toBe(four);
    });

    test('string', () => {
      return one.toString(str).then( (string) => console.log(string)
      );


    });
  });


});

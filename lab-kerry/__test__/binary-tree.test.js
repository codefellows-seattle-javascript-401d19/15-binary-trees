'use strict';

let BinaryTree = require('../model/binary-tree');


let eleven = new BinaryTree(11);
let twelve = new BinaryTree(12);
let thirteen = new BinaryTree(13);
let fourteen = new BinaryTree(14);
let fifteen = new BinaryTree(15);
let duplicateEleven = new BinaryTree(11);

eleven.left = twelve;
eleven.right = thirteen;

thirteen.left = fourteen;
thirteen.right = fifteen;

fifteen.left = duplicateEleven;



describe('Testing all three binary methods', () => {


	describe('Find method', () => {
		test('Find method should traverse tree and find single value', () => {
			expect(eleven.find(13)).toEqual(thirteen);
			expect(eleven.find(14)).toEqual(fourteen);
		});
		test('Find method should traverse tree and return the first iteration of the node even if there is another iteration elsewhere in the tree', () => {
			expect(fifteen.find(11)).toBe(duplicateEleven);
		});
		test('Find method should traverse tree and return null if value is not present', () => {
			expect(eleven.find(65)).toBeNull();
		});
		test('Find method should traverse tree and return null if no value provided', () => {
			expect(eleven.find()).toBeNull();
		});
	});

	describe('String method', () => {
		test('String method should traverse tree and create string composed of all values with a newline break in between each value.', () => {
			expect(eleven.concatToString('')).toEqual('11\n12\n13\n14\n15\n11');
		});
		test('String method should traverse tree beginning at intermediate root node, then create string composed of all values with a newline break in between each value.', () => {
			expect(thirteen.concatToString('')).toEqual('13\n14\n15\n11');
		});
		test('String method should traverse tree at node within larger tree and create string composed of all values with a newline break in between each value.', () => {
			expect(fifteen.concatToString('')).toEqual('15\n11');
		});
		test('String method should provide empty string as argument even if nothing is passed to function initially.', () => {
			expect(eleven.concatToString()).toEqual('11\n12\n13\n14\n15\n11');
		});
	});

	describe('Array method', () => {
		test('Array method should traverse tree and push node values to array', () => {
			expect(eleven.pushToArray([])).toEqual([12, 14, 11, 15, 13, 11]);
			expect(thirteen.pushToArray([])).toEqual([14,11,15,13]);
		});
		test('Array method should be able to take in populated array, then traverse tree and push remaining values it finds to the end of this argument array', () => {
			expect(eleven.pushToArray(['yup','this','is','possible'])).toEqual(['yup', 'this', 'is', 'possible',12, 14, 11, 15, 13, 11]);
		});
		test('Array method should provide empty array even if no argument passed to function', () => {
			expect(eleven.pushToArray()).toEqual([12, 14, 11, 15, 13, 11]);
		});
		test('Array method should return an array with a single value if no children are present', () => {
			expect(duplicateEleven.pushToArray()).toEqual([11]);
		});
	});
});
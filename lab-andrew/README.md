# Lab 15 Binary Trees

## Overview

This is a binary tree constructor with three prototype methods that might be desired for use with said tree.

## Getting Started

If you wish to use this constructor, simply copy the binary-tree.js file into your project and require it into the script in which you would like to use it.

```const BinaryTree = require('./lib/binary-tree')```

To run tests to check functionality, do an 

```npm i -D jest```

and then:

```npm run test```

A new tree can be instatiated with `new BinaryTree(`<`value of node`>`)`. To connect together a tree, set one tree instance to another's `tree`.left or `tree`.right. Take care not to create a circular tree (this defeats the purpose of this data structure, and the prototype methods will not work properly). The methods are designed to be called on the root node, but may be called on any node and will instead treat that node as the root.

## Module

The only module being exported is the binary-tree. This is a constructor function with three methods attached.

### findInOrder(`<value>`)

This function is designed to be called from the root of the tree, and it takes a value to be found. It will search through the tree 'in order' and return the node which matches the value passed into the function. If the value is not found, it will return null. Both of the worst case complexity scenarios exist with trees comprised only of right children nodes. The worst case time-complexity will require this to search through the entire tree once, and traverse a second time through the path to the found node. This worst case corresponds to a big O of O(2n), which reduces to an O(n), where n is the number of nodes in the tree. The worst case of space-complexity will correspond to creating a recursive stack frame for the entire tree twice, one after the other: the recursive search to find the node, that stack will clear, and then another recursive stack to return the node. Once the function is complete, no additional space will be exist in memory.

### preOrderToString()

This function is designed to be called from the root of the tree, and takes no input. It will traverse the tree in 'pre order' and return the value of each node as string separated by new-lines. It will traverse the tree once, so the time-complexity is always O(n), where n is the number of nodes in the tree. Because the function returns a string, the space complexity will be the length of the string plus the space the recursive callstack takes up in memory. In the worst case, this callstack will be the length of all of the nodes in the stack. This reduces to a space-complexity of O(n), where n is the length of the string, which corresponds to about 3 times the number of nodes in the tree.

### postOrderToArray()

This function is designed to be called from the root of the tree, and takes no input. It will traverse the tree in 'postpre order' and push each value to an array. It will then return that array. It will traverse the tree once, so the time-complexity is always O(n), where n is the number of nodes in the tree. Because the function returns an array, the space complexity will be the length of the array plus the space the recursive callstack takes up in memory. In the worst case, this callstack will be the length of all of the nodes in the stack. This reduces to a space-complexity of O(n), where n is the length of the array, which corresponds to the number of nodes in the tree.

## Code Examples:

```
const BinaryTree = require('./lib/binary-tree');

const one = new BinaryTree(1);
const two = new BinaryTree(2);
const three = new BinaryTree(3);
const four = new BinaryTree(4);

one.left = two;
one.right = three;
three.left = four;

one.findInOrder(2); // returns two
one.preOrderToString(); // returns '1\n2\n3\n4'
one.postOrderToArray(); // returns [2, 4, 3, 1]
```

## Technology/Credits

By Andrew Bloom. Using jest to test functionality.
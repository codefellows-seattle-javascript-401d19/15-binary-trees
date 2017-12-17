# Codefellows Javascript 401 lab 15 - Binary Tree

## Purpose
The purpose of this lab is to write a BinaryTree constructor with 3 attached prototype methods.  The three methods are .find(value), .toString(str), and .toArray(array).

## Code Style
Standard Javascript with ES6.

## BinaryTree constructor
The BinaryTree constructor has an arity of one.  The argument passed to it will be set to the .value property.  Each instance of the BinaryTree will also have properties of .left and .right which will initially be set to 'null'.

To create a binary tree, send each value you wish to have in the tree through the BinaryTree constructor.  Choose an instance of the BinaryTree to be your root.  Set two of the other instances to be children of the root by setting one of them to equal <root>.left and the other to equal <root>.right.  Similarly, set remaining instances to equal the left and right of those children.  Continue on until all instances have been set to a left or right of another instance.  Find more information on binary trees at https://en.wikipedia.org/wiki/Binary_tree.  See the test files in the __test__ folder for how it was set up during testing of this lab.

## BinaryTree.prototype.find(value) O(n)
This method has an arity of 1 and expects a value.  This will be the value for which the method searches the BinaryTree.  The search is done via in-order transversal.  If it is found, it will return the first node that matches.  If it is not found, it returns null.  

## BinaryTree.prototype.toString(str) O(n)
This method has an arity of 1 and expects a string.  It can be called without a string and will still work.  If a string is passed in, the contents of the string will lead the string that is returned.

The method uses pre-order transversal to visit each node and add it to a string with a hard return after each value.  When complete, the string is returned.

## BinaryTree.prototype.toArray(array) O(n)
This method has an arity of 1 and expects an array.  It can be called without an array and will still work.  If an array is passed in, the contents of the array will be at the beginning of the returned array.

The method uses post-order transversal to visit each node and add it to an array.  When complete, the array is returned.

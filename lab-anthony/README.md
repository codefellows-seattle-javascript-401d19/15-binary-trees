#Author:
Anthony Robinson

#Description:
This app is used for creating and traversing a binary tree.
Functionality includes pre order traversal which returns a binary tree to string in
pre order, post order traversal which returns a binary tree as an array in post order,
and in order traversal which takes in a binary tree and a value to find and returns
the found value or null if not found.

#Usage:
In binary-tree.test.js, use binaryTree('value') to create a new node.
You must manually set the left.value and right.value.

traverse.preOrderTraversal('root')
traverse.postOrderTraversal('root')
traverse.inOrderTraversal('root', 'search value')

worst case scenario for each function is Big O of n 

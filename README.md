# Code Fellows 401 Lab 13
In this project I built a Binary Tree with three methods: A find method that uses in-order traversal. A toString method that uses pre-order traversal, and a toArray method that uses post-order traversal.

## Code Style
Standard Javascript with ES6.

## Big O
This project uses O(n) in time where n is the nodes in the binary tree. The functions are recursive.

This project uses O(n) in space/memory where n represents the nodes returned.


## Build
#### .find Method

BinaryTree.prototype.find is a prototype method on the BinaryTree constructor that expects a parameter of 'value'. The value argument must be passed as a number or an error will be thrown. The method accepts a value and will find and return the first node containing that value. If the value is not found in the Binary Tree, then it will return null.

#### .toString Method

BinaryTree.prototype.toString is a prototype method on the BinaryTree constructor that does not expect parameters. The toString method will take the nodes from the Binary Tree and return the concatenated values separated by newlines in to a string. The Binary Tree must not be null in order to run this function.

#### .toArray Method

BinaryTree.prototype.toArray is a prototype method on the BinaryTree constructor that does not expect parameters. The toArray method will take the nodes from the Binary Tree and return an array containing all of the elements in the binary tree. The Binary Tree must not be null in order to run this function. 

## Development Libraries
Jest for testing


### How to use?

* Step 1. Fork and Clone the Repository.
* Step 2. `npm install`.
* Step 3. to test the API, open a second terminal window and run the command `npm run test`.

### Credits

* Code Fellows / Vinicio Vladimir Sanchez Trejo for providing the demo code.

## Author
Dalton Carr
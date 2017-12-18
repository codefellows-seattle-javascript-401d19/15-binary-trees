# Binary Trees

Two implementations of a Binary Tree class in JavaScript. Not to be confused
with Binary Search Trees.

                                  1
                                 000
                                01000
                               1010000
                              101010000   
                               1010100
                             10101010000
                            1010101010000
                           010110101000000
                            1101100010000
                           100100100100100
                          10010010010010000
                         1001001011001001000
                        010100101001001000000

# Tech Used

- JavaScript
- Jest

# Features

`binary-tree.js` has a `BinaryTree` class which creates individual
nodes in a Binary Tree which are then connected by manually declaring
`node.left` and `node.right` properties.

`binary-tree2.js` has a `BinaryTree2` class which connects individual nodes
in a BinaryTree via its `insert(<value>)` method. This is achieved by an
internal `Node(<value>)` constructor.

Both classes feature a `find(<value>)`, `toString()` and `toArray()` methods.

`find` traverses the tree via in-order traversal

`toString` traverses the tree via pre-order traversal

`toArray` traverses the tree via post-order traversal

# Performance in BigO

- RUNTIME: `find`, `toString`, `toArray` and `insert` are all O(n) operations
where n is equal to the number of nodes in the tree.

- SPACE: `find`, `toString` and `toArray` are O(n) due to recursive solutions
building up memory on the callstack. `insert` on `binary-tree2.js` is in the
worst case O(h) in memory where h is equal to the height of the tree.

# Installation

- Clone the repo
- Require in `binary-tree.js` or `binary-tree2.js`
- Instantiate and play with Binary Trees!

# Tests

All testing done with `jest`

# How to Use

### `binary-tree.js`

1. Instantiate individual nodes

`const one = new BinaryTree(1);`

`const two = new BinaryTree(2);`

`const three = new BinaryTree(3);`

`const four = new BinaryTree(4);`

`const five = new BinaryTree(5);`

2. Manually connect nodes from a `root` node

`one.left = two;`

`one.right = three;`

`three.left = four;`

`three.right = five;`

This will create a Binary Tree that looks like this:

      1
     / \
    2   3
       / \
      4   5

3. Perform `find`, `toString` or `toArray` operations on your root node

`one.find(3); // returns three`

`one.find(6); // returns null`

`one.toString(); // returns '1 /n 2 /n 3 /n 4 /n 5 /n'`

`one.toArray(); // returns [two, four, five, three, one]`

### `binary-tree2.js`

1. Instantiate your tree

`const ExampleTree = new BinaryTree2();`

2. Add nodes to `ExampleTree`

`ExampleTree.insert(1);`

`ExampleTree.insert(2);`

`ExampleTree.insert(3);`

`ExampleTree.insert(4);`

`ExampleTree.insert(5);`

`ExampleTree.insert(6);`

`ExampleTree.insert(7);`

NOTE: Insert maintains a balanced tree via level-order traversal and insert

This will create a Binary Tree that looks like this:

        1
       / \
      2   3
     / \ / \
    4  5 6  7

3. Perform `find`, `toString`, or `toArray` operations on ExampleTree

`ExampleTree.find(3); // returns three`

`ExampleTree.find(100); // returns null`

`one.toString(); // returns '1 /n 2 /n 3 /n 4 /n 5 /n 6 /n 7 /n'`

`one.toArray(); // returns array of Nodes in post-order`

# Credits

Cameron Moorehead - https://github.com/CameronMoorehead

# License

GPL-3.0

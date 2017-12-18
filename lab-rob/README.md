# Code Fellows: Code 401d19: Full-Stack JavaScript

## Lab 15: Trees

12/16/19

The purpose of this lab is to implement a binary tree constructor with methods to traverse a binary tree using in-, pre-, and post-order traversals, and to act on the values of the nodes. We export a constructor with three methods. A method to find a node with a given value, a method to concatenate all node values onto a string, and a method to push all node values into an array.

## Tech/frameworks/packages

- node 
- npm
- node packages
  - jest
  - eslint 

## How to use?
Clone this repo, `cd` into `lab-rob`, run `npm install`. 

Or, copy `lib/binary-tree.js` into your project.

### Constructor

#### `new BinaryTree(value)`

Create a new tree with a given `value`.

```
let myNode = new BinaryTree(29);

console.log(myNode);

// myNode: {
    value: 29,
    left: null,
    right: null,
}
```

### Methods

#### `.find(value)`

Iterate over the tree using an in-order traversal to find the first node with the requested value. If a node with the value is found, return it, else return null.

```
myNode.find(17);
// returns null

let myNode2 = new BinaryTree(17);
let myNode3 = new BinaryTree(24);

myNode.left = myNode2;
myNode2.left = myNode3;


myNode.find(17);
// returns myNode2
```

The Big O time complexity for this method is O(_n_), where _n_ is the number of nodes in the tree.

The Big O space complexity for this method is O(_h_), where _h_ is the height of the calling tree. This is because the recursive nature of the method. The call stack for the furthest leaf will equal the height of the tree. This becomes O(log_n_), where _n_ is the number of nodes in the tree, because of maths.

#### `.toString(str)`

Iterate over the tree using a pre-order traversal. Concatenate each node's value with the provided string and a newline character. If no string is provided, an empty string will be used.

```
let myString = myNode.toString('hey');
console.log(myString);
// hey
// 29
// 17
// 24
```

The Big O time complexity for this method is O(_n_), where _n_ is the number of nodes in the tree.

The Big O space complexity for this method is O(_h_), where _h_ is the height of the calling tree. This is because the recursive nature of the method. The call stack for the furthest leaf will equal the height of the tree. This becomes O(log_n_), where _n_ is the number of nodes in the tree, because of maths.

#### `.toArray(array)`

Iterate over the tree using a post-order traversal. Push each node's value onto the provided array. If no array is provided, an empty array will be used.

```
let myArry = myNode.toArray(['hey']);
console.log(myArry);
// ["hey", 29, 17, 24]
```

The Big O time complexity for this method is O(_n_), where _n_ is the number of nodes in the tree.

The Big O space complexity for this method is O(n), where _n_ is the number of nodes in the calling tree. This is because we are creating an array with each node's value. The call stack for the furthest leaf will equal the height of the tree, so technically we must consider that as well, but the call stack requires log_n_ space, and O(_n_ + log_n_) is the same as O(_n_).

## Tests

run `npm test` to check all tests.

### Constructor

1. instantiation should result in an object with the specified value and null left and right properties.

### `.find(value)`

1. find should return the node containing a unique value.
1. find should return the calling node if the calling node is unique and has the desired value.
1. find should return the first node with the desired value, even if there is a duplicate down the tree.
1. find should return null if no node has the requested value.

### `.toString(str)`

1. toString should return a concatenated string of all values using a pre-order traversal if an empty string is provided.
1. toString should provide an empty string to start if no string is provided.
1. toString should concatenate to the end of the provided string if a nonempty string is provided.
1. toString should throw an error if a non-string is provided as argument.

### `.toArray(array)`

1. toArray should return an array of all values using a post-order traversal if an empty array is provided as argument.
1. if no argument is provided, an empty array will be supplied and returned.
1. if a nonempty array is provided, tree\'s values will be pushed onto the end of it.
1. toArray should throw an error if a non-array is provided as argument.


## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## Credits

Project from Vinicio Vladimir Sanchez Trejo.

## License

MIT. Use it up!
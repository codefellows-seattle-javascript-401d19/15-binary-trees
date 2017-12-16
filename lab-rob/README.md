# Code Fellows: Code 401d19: Full-Stack JavaScript

## Lab 15: Trees

12/16/19

The purpose of this lab is to implement a binary tree constructor with methods to .

## Tech/frameworks/packages

- node 
- npm
- node packages
  - jest
  - eslint 

## How to use?
Clone this repo, `cd` into `lab-rob`, run `npm install`. Or, copy `lib/binary-tree.js` into your project.

### Constructor

#### `BinaryTree(value)`

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
let myNode3 = new BindaryTree(24);

myNode.left = myNode2;
myNode2.left = myNode3;


myNode.find(17);
// returns myNode2
```

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

#### `.toArray(array)`

Iterate over the tree using a post-order traversal. Push each node's value onto the provided array. If no array is provided, an empty array will be used.

```
let myArry = myNode.toArray(['hey']);
console.log(myString);
// ["hey", 29, 17, 24]
```



## Tests

run `npm test` to check all tests.


## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## Credits

Project from Vinicio Vladimir Sanchez Trejo.

## License

MIT. Use it up!
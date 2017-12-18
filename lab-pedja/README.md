## ![cf](https://i.imgur.com/7v5ASc8.png) Class 15 Binary Tree 
======

* This lab includes creating Binary Tree constructor and three methods `find`, `toString` and `toArray`. Purpose is implementing three different methods of binary tree traversal - in-order, pre-order and post-order.


find(value) should iterate over all child nodes using an in-order traversal and return the first node that has that value, it should return null if a node with the value is not found
toString(str) should iterate over all child nodes using a pre-order traversal and concatenate their values separated by newlines in to a string
.toArray(array) should use a post-order traversal and push all the tree's elements into an array.

  * find(in-order)
  * toString(pre-order)
  * toArray(post-order

## Code Style
* Vanilla Javascript and Jest for testing


## Tech / framework used

* [npm package jest](http://facebook.github.io/jest/) used for TDD



## Installation and How To Use

  * Fork || clone this repo to you computer.

  * Run `npm install`

  * To run tests run `npm test` command.


## BinaryTree.find(arg)

`BinaryTree.find` method takes a value, goes through binary tree and if entered value is in binary tree it returns node with that value. It searches using **in-order traversal**. Value has to be a number and if it's not found in binary tree it will return null. Big 0 of this method is 0(n).

## BinaryTree.toString(arg)

`BinaryTree.toString` method takes a string value, traverses through binary tree using **pre-order** method and take every node's value and concat's it to our argument. Argument has to be a string or it will return null. Big 0 of this method is 0(n).

## BinaryTree.find(arg)

`BinaryTree.toArray` method takes a array as a value, traverses through binary tree using post-order method and takes every node's value and adds it to argument array. Big 0 of this method is 0(n).


## Licence
MIT © Pedja Josifovic

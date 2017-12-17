# 15: Binary Tree
Description: **Lab 15 of Code Fellows JavaScript 401d19** </br>
Author: **Matthew LeBlanc** </br>
Date: **12/16/17**

## Features
This lab implements the creation, searching, and listing, of values in a binary-tree

## Tech/Framework Used
- node.js
- javascript
- Visual Studio Code

## Requirements
- node.js

## Usage
1. `cd` into the lab-matt folder
2. `npm install` the required dev dependency packages
3. `npm run test` to use `jest` to run the test coverage

## Dependencies
<u>DEV</u>
1. `eslint`
2. `jest`

## BinaryTree Methods
- `.addLeft` - adds a left property to the current node (throws an error if one already exists)
- `.addRight` - adds a right property to the current node (throws an error if one already exists)
- `.appendLeft` - adds a new leaf to the left the current node 
- `.appendRight` - adds a new leaf to the right the current node 
- `.find(value)` - finds a given value from the given node and returns the node with the given value (searches `in-order`)
- `.toString()` - turns all values in a tree into a string with `\n` seperating each value (adds by `pre-order`)
- `.toArray()` - pushes all values into an array (pushes by `post-order`)
'use strict';

const bt = require('./lib/binary-tree');

let myTree = new bt(10);

console.log(myTree);

myTree.addLeft(new String(34));

console.log(new String(34));

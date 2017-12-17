'use strict';

const bt = require('./lib/binary-tree');

let Tree = new bt(1);
Tree.appendLeft(2);
Tree.appendLeft(new bt(3));
Tree.appendLeft(4);
Tree.addRight(5);
Tree.right.addRight(7);
Tree.right.addLeft(8);

// console.log(Tree);

// console.log('FOUND OBJECT: ', Tree.find(5));

console.log(Tree.toString());


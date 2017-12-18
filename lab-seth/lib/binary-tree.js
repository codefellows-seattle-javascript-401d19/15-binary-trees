'use strict';

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.inOrderTraversal = function(root) {
  if (root === null) return;
  BinaryTree.prototype.inOrderTraversal(root.left);
  console.log('Visiting ', root.value);
  BinaryTree.prototype.inOrderTraversal(root.right);
 
};

BinaryTree.prototype.find = function(value) {
  let found = null;
  let node = this;

  console.log('Finding ', value);

  let hunter = (node, value) => {
    if(node.value === value) {
      found = true;
      return console.log('Returned Node: ',node);
    } else {
      if(node.left === null && node.right === null) {
        return;
      }else{
        hunter(node.left, value);
        hunter(node.right, value);
      }
    }
  };

  hunter(node, value);
  if(found === null) return console.log(`${value} NOT FOUND!  `); 
  
    
};

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let six = new BinaryTree(6);
let seven = new BinaryTree(7);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
four.left = six;
four.right = seven;


one.find(10);
one.find(1);
one.find(4);
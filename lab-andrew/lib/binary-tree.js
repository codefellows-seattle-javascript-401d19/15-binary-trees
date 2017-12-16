'use strict';

function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

const one = new BinaryTree(1);
const two = new BinaryTree(2);
const three = new BinaryTree(3);
const four = new BinaryTree(4);
const five = new BinaryTree(5);

one.left = two;
one.right = three;
three.left = four;
three.right = five;

BinaryTree.preOrderTraversal = root => {

  if (root === null){
    return;
  }

  console.log(root.value);
  BinaryTree.preOrderTraversal(root.left);
  BinaryTree.preOrderTraversal(root.right);
};

BinaryTree.inOrderTraversal = root => {

  if (root === null){
    return;
  }

  BinaryTree.inOrderTraversal(root.left);
  console.log(root.value);
  BinaryTree.inOrderTraversal(root.right);
};

BinaryTree.postOrderTraversal = root => {

  if (root === null){
    return;
  }

  BinaryTree.postOrderTraversal(root.left);
  BinaryTree.postOrderTraversal(root.right);
  console.log(root.value);
};

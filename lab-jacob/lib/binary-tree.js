'use strict';


class BinaryTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;

  }
}

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

BinaryTree.prototype.find = function(root) {
  console.log('====================================');
  console.log(root);
  console.log('====================================');
   
};

BinaryTree.preOrder = (root) =>{
  if(root === null)
    return; 

  console.log(`Visiting ${root.value}`);
  BinaryTree.preOrder(root.left);
  BinaryTree.preOrder(root.right);
};
BinaryTree.postOrder = () => {
  if(root === null)
    return; 

  BinaryTree.postOrderTraversal(root.left);
  BinaryTree.postOrderTraversal(root.right);
  console.log(`Visiting ${root.value}`);
};

// BinaryTree.preOrder(one);
BinaryTree.postOrder(one);
'use strict';

function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
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

BinaryTree.prototype.inOrder = function (root){
  
  if (this.left){
    let foundValueLeft = this.left.inOrder;
    if(foundValueLeft){
      return foundValueLeft;
    }
  }
  
  if (this.root === root){
    return this;
  }

  if (this.right){
    let foundValueRight = this.right.inOrder;
    if(foundValueRight){
      return foundValueRight;
    }
  }

  return null;
};


BinaryTree.preOrder = (root) =>{
  if(root === null)
    return; 

  console.log(`Visiting ${root.value}`);
  BinaryTree.preOrder(root.left);
  BinaryTree.preOrder(root.right);

};
BinaryTree.postOrder = (root) => {
  if(root === null)
    return; 

  BinaryTree.postOrder(root.left);
  BinaryTree.postOrder(root.right);
  console.log(`Visiting ${root.value}`);
};


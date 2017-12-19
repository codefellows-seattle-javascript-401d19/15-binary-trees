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

BinaryTree.prototype.inOrder = function (){
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


BinaryTree.prototype.preOrderToString = () =>{
  return this._preOrderToString(this,'').trim();
};

BinaryTree.prototype._preOrderToString = function (root){
  if(root === null)
    return '';
  else
    console.log(`\n${root.value}`) +
  this._preOrderToString(root.left) +
  this._preOrderToString(root.right);
};
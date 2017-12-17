'use strict';


function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.appendToHook = (value, hookValue) => {
  if(this === null)
    return;
  if(this.value === hookValue){
    if(this.left)
      return this.right = new BinaryTree(value);
    return this.left = new BinaryTree(value);
  }

  this.left.appendToHook(value, hookValue);
  this.right.appendToHook(value, hookValue);
};

BinaryTree.prototype.append = (value) => {
  if(!this.left)
    return this.left = new BinaryTree(value);
  if(!this.right)
    return this.right = new BinaryTree(value);
  if(Math.floor(Math.random()*2) === 1)
    return BinaryTree.append(value, this.left);
  return BinaryTree.append(value, this.right);
};

BinaryTree.prototype.inOrderFind = (value) => {
  if(this === null)
    return;
  this.left.inOrderFind(value);
  if(this.value === value) {
    console.log(this);
    return this;
  }
  this.right.inOrderFind(value);
};

BinaryTree.prototype.preOrderToString = () => {

};

BinaryTree.prototype.postOrderToArray = () => {

};

let appendRooter = new BinaryTree(70);
appendRooter.append(9);
appendRooter.append(8);
appendRooter.append(7);
appendRooter.append(6);
appendRooter.append(5);
appendRooter.append(4);
appendRooter.append(3);
appendRooter.append(2);
appendRooter.append(1);


let appendToHookRooter = new BinaryTree(70);
BinaryTree.appendToHook(9, appendToHookRooter, 70);
BinaryTree.appendToHook(8, appendToHookRooter, 9);
BinaryTree.appendToHook(7, appendToHookRooter, 8);
BinaryTree.appendToHook(6, appendToHookRooter, 9);
BinaryTree.appendToHook(5, appendToHookRooter, 8);
BinaryTree.appendToHook(4, appendToHookRooter, 5);
BinaryTree.appendToHook(3, appendToHookRooter, 4);


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

five.left = six;
five.right = seven;

let preOrderTraversal = (root) => {
  if(root === null)
    return;
  console.log(root);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
};

let postOrderTraversal = (root) => {
  if(root === null)
    return;
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root);
};

let inOrderTraversal = (root) => {
  if(root === null)
    return;
  inOrderTraversal(root.left);
  console.log(root);
  inOrderTraversal(root.right);
};


module.exports = BinaryTree;

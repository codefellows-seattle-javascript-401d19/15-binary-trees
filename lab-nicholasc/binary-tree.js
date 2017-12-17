'use strict';

class BinaryTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

BinaryTree.appendToHook = (value, root, hookValue) => {
  if(root === null)
    return;
  if(root.value === hookValue){
    if(root.left)
      return root.right = new BinaryTree(value);
    return root.left = new BinaryTree(value);
  }

  BinaryTree.appendToHook(value, root.left, hookValue);
  BinaryTree.appendToHook(value, root.right, hookValue);
};
BinaryTree.append = (value, root) => {
  if(!root.left)
    return root.left = new BinaryTree(value);
  if(!root.right)
    return root.right = new BinaryTree(value);
  if(Math.floor(Math.random()*2) === 1)
    return BinaryTree.append(value, root.left);
  return BinaryTree.append(value, root.right);
};

let appendRooter = new BinaryTree(70);
BinaryTree.append(9, appendRooter);
BinaryTree.append(8, appendRooter);
BinaryTree.append(7, appendRooter);
BinaryTree.append(6, appendRooter);
BinaryTree.append(5, appendRooter);
BinaryTree.append(4, appendRooter);
BinaryTree.append(3, appendRooter);
BinaryTree.append(2, appendRooter);
BinaryTree.append(1, appendRooter);


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

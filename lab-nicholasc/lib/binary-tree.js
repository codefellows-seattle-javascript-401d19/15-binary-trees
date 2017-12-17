'use strict';


function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.appendToHook = function(value, hookValue){
  console.log(this);

  if(this === null){
    return;
  }

  if(this.value === hookValue){
    if(this.left)
      return this.right = new BinaryTree(value);
    return this.left = new BinaryTree(value);
  }

  if(this.left)
    this.left.appendToHook(value, hookValue);
  if(this.right)
    this.right.appendToHook(value, hookValue);
};

BinaryTree.prototype.append = function(value){
  if(!this.left)
    return this.left = new BinaryTree(value);
  if(!this.right)
    return this.right = new BinaryTree(value);
  if(Math.floor(Math.random()*2) === 1)
    return this.left.append(value);
  return this.right.append(value);
};

BinaryTree.prototype.inOrderFind = function(value){
  let found = null;
  if(this.left)
    found = this.left.inOrderFind(value);
  if(this.value === value && found === null) {
    found = this;
  }
  if(this.right && found === null)
    found = this.right.inOrderFind(value);
  return found;
};

BinaryTree.prototype.preOrderToString = function(string){
  if(string === undefined){
    string = this.value;
  }
  else{
    string = `${string} ${this.value}`;
  }
  if(this.left)
    string = this.left.preOrderToString(string);
  if(this.right)
    string = this.right.preOrderToString(string);
  return string;
};

BinaryTree.prototype.postOrderToArray = (arr) => {
  if(arr === undefined){
    arr = [this.value];
  }
  if(this.left)
    arr = this.left.postOrderToArray(arr);
  if(this.right)
    arr = this.right.postOrderToArray(arr);

  arr.push(this.value);

  return arr;
};


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

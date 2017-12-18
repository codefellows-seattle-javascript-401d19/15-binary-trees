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
  let node = this;
  let foundNode = null;  

  // if(this.left){
  //   if(this.left.)
  // }

  let hunter = function (node, value) {
    if(node.value === value) {
      console.log('Found node: ', node);
      foundNode = node;
      return;
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
  return foundNode;
};

//TODO: ADD toString() METHOD

//TODO: ADD toArray() METHOD

module.exports.BinaryTree = BinaryTree;
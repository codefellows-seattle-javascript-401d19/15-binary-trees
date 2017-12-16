'use strict';

const BinaryTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;

};
let foundNode = null;
let foundCount = 0;
BinaryTree.prototype.find = function(value) {

  // if(this === null)
  //   return;

  if(this.left !== null){
    this.left.find(value);

  }
  if(this.value === value){
    if(foundCount === 0){
      foundCount++;
      foundNode = this;

    }
    return;
  }
  if(this.right !== null){
    this.right.find(value);

  }
  return foundNode;
};

BinaryTree.prototype.toString = function(str) {

  if(this === null)
    return;

  str = str + this.value + '\n';
  if(this.left !== null)
    this.left.toString(str);
  if(this.right !== null)
    this.right.toString(str);


};


module.exports = BinaryTree;




// let preOrderTraversal = (root) => {
//
//   if(root === null)
//     return;
//
//   console.log(`Visiting ${root.value}`);
//   preOrderTraversal(root.left);
//   preOrderTraversal(root.right);
// };
//
// let inOrderTraversal = (root) => {
//
//   if(root === null)
//     return;
//
// }

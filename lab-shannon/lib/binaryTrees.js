'use strict';

function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;

  this.find = function(value){  //in-order traversal (left-root-right)
   let foundElement = null;

   if(this.left){
     foundElement = this.left.find(value);
   }

   if(foundElement === null && this.value === value)
     foundElement = this;

   if(foundElement === null && this.right){
     foundElement = this.right.find(value);
   }

   return foundElement;
 };

  // this.toString = function(str){  // pre-order traversal (root-left-right)
  //   if(!this)
  //     return;
  //
  //   str += this.value + '\n';
  //   this.left.toString(str);
  //   this.right.toString(str);
  //   return str;
  // };

  // this.toArray = function(array){ // post-order traversal (left-right-root)
  //   if(!this)
  //     return;
  //
  //   this.left.toArray(array);
  //   this.right.toArray(array);
  //   array.push(this);
  // };
}

module.exports = BinaryTree;

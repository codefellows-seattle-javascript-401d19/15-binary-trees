'use strict';

function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;

  this.find = function(value){  //in-order traversal (left-root-right)
    if(!value){
      throw new Error(`You must provide a value in order to search the binary tree`);
    }
   let foundElement = null;

   if(this.left){
     foundElement = this.left.find(value);
   }

   if(foundElement === null && this.value === value){
     foundElement = this;
   }

   if(foundElement === null && this.right){
     foundElement = this.right.find(value);
   }

   return foundElement;
 };

  this.toString = function(str){  // pre-order traversal (root-left-right)
    if(!str){
      throw new TypeError(`A string must be provided for concatenation`);
    }
    if(this){
      str += this.value + `\n`;
    }
    if(this.left){
      str = this.left.toString(str);
    }
    if(this.right){
      str = this.right.toString(str);
    }

    return str;
  };

  this.toArray = function(array){ // post-order traversal (left-right-root)
    let leftArray;
    let rightArray;
    if(typeof array !== 'object'){
      throw new Error(`An array must be provided as the argument`);
    }
    if(this.left){
      leftArray = this.left.toArray(array);
      console.log(leftArray);
    }
    if(this.right){
      rightArray = this.right.toArray(array);
      // console.log(rightArray);
    }
    array.push(leftArray);
    array.push(rightArray);
    array.push(this.value);

    return array;
  };
}

module.exports = BinaryTree;

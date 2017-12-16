'use strict';

function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;

  this.find = function(value){  //in-order traversal (left-root-right)
    let leftElement = this.left;
    let rightElement = this.right;

    if(leftElement === null){
      if(this.value === value)
        return this.value;
      else if(rightElement !== null)
        return this.right.find(value);
    }else {
      return this.left.find(value);
    }
    // return null;
  };

 //  this.find = function(value){  //in-order traversal (left-root-right)
 //   if(this.left){
 //     console.log(this, `from this.left`);
 //     return this.left.find(value);
 //   }
 //
 //   if(this.value === value)
 //   return this.value;
 //
 //   else if(this.right){
 //     console.log(this, `from this.right`);
 //     return this.right.find(value);
 //   }
 // };

    // if(this.left){
    //   console.log(`There is a left node`);
    //   return this.left.find(value);
    // }else{
    //   console.log(`There is no left node`);
    //   if(this.value === value)
    //     return this;
    // }
    //
    // if(this.right){
    //   console.log(`There is a right node`);
    //   return this.right.find(value);
    // }else{
    //   if(this.value === value)
    //     return;
    // }


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

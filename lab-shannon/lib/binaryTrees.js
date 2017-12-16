'use strict';

function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;

  this.find = function(value){  //in-order traversal (left-root-right)
    // as long as there is a left element, go left
    // when there are no elements to the left, see if the current value is what we want
    // if it's not, see if there is a value to the right; does it have a left node?
    // if it does go left as long as there are left nodes
    // when there are no elements to the left, see if the current value is what we want

    if(this.left)
      this.left.find(value);

    if(this.value === value)
      return this.value;
    else
      return;

    if(this.right)
      this.right.find(value);
    else
      return;

    return null;
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

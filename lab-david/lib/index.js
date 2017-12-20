'use strict';

// setting up constructor
const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};
  // methods on the constructor
  // iterate over all child nodes using an in-order traversal and return first node with the value, return null if not found
BinaryTree.prototype.find = function(value) {
  let foundNode = null;

  if(this.left) {
    foundNode = this.left.find(value);
  }

  if(this.value === value && !foundNode) {
    foundNode = this;
  }
  if(this.right && !foundNode) {
    foundNode = this.right.find(value);
  }
  
  return foundNode;
};

// iterate over all nodes using pre-order traversal and concatenate their values separated by newlines into a string
BinaryTree.prototype.toString = function(str) {
  // if(typeof str !== 'string')
  //   throw new TypeError('argument <string> must be an string');
  // dont think this is necessary ^^ 

  if(!str){
    str = `${this.value}`;
  } else {
    str += `\n${this.value}`;
  }

  if(this.left) {
    str = this.left.toString(str); 
  }

  if(this.right) {
    str = this.right.toString(str);
  }

  return str;

};

// should use post-order traversal push all tree elements into an array
BinaryTree.prototype.toArray = function(array) {
  // if(!Array.isArray(array))
  //   throw new TypeError('argument <array> must be an array');

  if(array === null)
    return;

  if(this.left){
    array = this.left.toArray(array);
  }

  if(this.right){
    array = this.right.toArray(array);
  }

  if(this.root){
    return array = this.root.toArray(array);
  }

  if(!array){
    array = `[${this.value}]`;
  } else {
    array.push(this.value);
  }

  return array;
};  


// moved these to the tests so can remove, i think
// this is all the nodes 
let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let six = new BinaryTree(6);


// setting up binary tree
one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.right = six;

BinaryTree.prototype.toString(one);

module.exports = BinaryTree;
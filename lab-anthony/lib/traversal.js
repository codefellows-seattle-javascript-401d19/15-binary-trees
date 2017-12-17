'use strict';


let preOrderTraversal = (root) => {

  let preOrderString = '';
  console.log(root.value);
  if (root === null)
    return;

  if (root.value)
    preOrderString += (root.value + `\n`);
  if (root.left)
    preOrderString += preOrderTraversal(root.left);
  if (root.right)
    preOrderString += preOrderTraversal(root.right);
  console.log(preOrderString);
  return preOrderString;
};

let postOrderTraversal = (root) => {

  let postOrderArray = [];

  if (root === null)
    return;

  if (root.left)
    postOrderArray = postOrderArray.concat(postOrderTraversal(root.left));
  if (root.right)
    postOrderArray = postOrderArray.concat(postOrderTraversal(root.right));
  if (root.value)
    postOrderArray.push(root.value);
  console.log('post', postOrderArray);
  return postOrderArray;
};

let inOrderTraversal = (root, value) => {
  let foundValue = null;
  console.log(root, value);
  if (root.left) {
    foundValue = inOrderTraversal(root.left, value);
    if(foundValue)
      return foundValue;
  }
  if (root.value === value) {
    console.log('found value:', root.value);
    return root.value;
  }
  if (root.right) {
    foundValue = inOrderTraversal(root.right, value);
  }
  return foundValue;
};

module.exports = {
  preOrderTraversal: preOrderTraversal,
  postOrderTraversal: postOrderTraversal,
  inOrderTraversal: inOrderTraversal,
};

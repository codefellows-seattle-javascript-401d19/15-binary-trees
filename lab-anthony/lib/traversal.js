'use strict';


let preOrderTraversal = (root) => {

  if (root === null)
    return;

  console.log(`Visiting ${root.value}`);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
};

let postOrderTraversal = (root) => {

  if (root === null)
    return;

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(`Visiting ${root.value}`);
};

let inOrderTraversal = (root) => {

  if (root === null)
    return;

  inOrderTraversal(root.left);
  console.log(`Visiting ${root.value}`);
  inOrderTraversal(root.right);
};

module.exports = {
  preOrderTraversal: preOrderTraversal,
  postOrderTraversal: postOrderTraversal,
  inOrderTraversal: inOrderTraversal,
};

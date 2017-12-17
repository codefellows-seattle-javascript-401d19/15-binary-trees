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

  if (root === null)
    return;

  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
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

'use strict';

const BinaryTree2 = function() {
  const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  let root = null;

  this.insert = value => {
    const newNode = new Node(value);

    const insertNode = (node, newNode) => {
      const queue = [];
      queue.push(node);

      while (queue.length !== 0) {
        const item = queue.shift();
        if (item.left === null) {
          item.left = newNode;
          console.log(`inserted ${newNode.value}`);
          return;
        }
        if (item.right === null) {
          item.right = newNode;
          console.log(`inserted ${newNode.value}`);
          return;
        }
        if (item.left !== null) {
          queue.push(item.left);
        }
        if (item.right !== null) {
          queue.push(item.right);
        }
      }
    };

    if (!root) {
      root = newNode;
      console.log(`inserted ${newNode.value}`);
    } else {
      insertNode(root, newNode);
    }
  };

  this.find = value => {
    let found = null;

    const findRec = node => {
      if (node.left) {
        findRec(node.left);
      }

      if (node.value === value) {
        found = node;
      }

      if (node.right) {
        findRec(node.right);
      }

      return found;
    };

    return findRec(root);
  };

  this.toString = (str = '') => {
    let builtStr = str;

    const toStringRec = node => {
      builtStr += `${node.value} \n`;

      if (node.left) {
        toStringRec(node.left);
      }

      if (node.right) {
        toStringRec(node.right);
      }

      return builtStr;
    };

    return toStringRec(root);
  };

  this.toArray = (arr = []) => {
    let builtArr = arr;

    const toArrayRec = node => {
      if (node.left) {
        toArrayRec(node.left);
      }

      if (node.right) {
        toArrayRec(node.right);
      }

      builtArr.push(node);

      return builtArr;
    };

    return toArrayRec(root);
  };
};

let test = new BinaryTree2();
test.insert(1);
test.insert(2);
test.insert(3);
test.insert(4);
test.insert(5);
test.insert(6);
test.insert(7);

console.log(test.toArray());

module.exports = BinaryTree2;

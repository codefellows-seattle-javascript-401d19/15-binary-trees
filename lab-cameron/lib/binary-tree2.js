'use strict';

const BinaryTree2 = function() {
  const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  let root = null;
  let nodeCount = 0;

  this.insert = value => {
    const newNode = new Node(value);

    const insertNode = (node, newNode) => {
      const queue = [];
      queue.push(node);

      while (queue.length !== 0) {
        const item = queue.shift();
        if (item.left === null) {
          item.left = newNode;
          nodeCount++;
          console.log(`inserted ${newNode.value}`);
          return;
        }
        if (item.right === null) {
          item.right = newNode;
          nodeCount++;
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
      nodeCount++;
      console.log(`inserted ${newNode.value}`);
    } else {
      insertNode(root, newNode);
    }
  };

  this.find = value => {
    let found = null;

    const findRec = node => {
      if (node.left && found === null) {
        findRec(node.left);
      }

      if (node.value === value && found === null) {
        found = node;
      }

      if (node.right && found === null) {
        findRec(node.right);
      }

      return found;
    };

    return findRec(root);
  };

  this.toString = () => {
    let builtStr = '';

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

  this.toArray = () => {
    let builtArr = [];

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

  this.getNodeCount = () => {
    return nodeCount;
  };
};

module.exports = BinaryTree2;

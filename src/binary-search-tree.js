const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

// class Node {
//   constructor (data) {
//     this.value = data;
//     this.left = null;
//     this.right = null;
//   }
// }


/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.groot = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if (!this.groot) {
      return null;
    }
    return this.groot;
  }

  add(data) {
   this.groot = addNew(this.groot, data);

   function addNew (node, data) {
    if (!node) {
      return new Node(data);
    }
    if (node.data === data) {
      return node;
    }

    if (data < node.data) {
      node.left = addNew (node.left, data);
    } else {
      node.right = addNew (node.right, data);
    }
     return node;
   }

  }

  has(data) {
    return this.searchNode(this.groot, data) !== null;
    }
  

  find(data) {
    return this.searchNode(this.groot, data);
  }

    
  searchNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else {
      return this.searchNode(node.right, data);
    }
  }

  remove(data) {
    this.groot = removeItem(this.groot, data);

    function removeItem(node, data) {
      if (!node) {
        return null;  
      } 
        if (data  < node.data) {
          node.left = removeItem (node.left, data);
          return node;
        } else if (node.data < data) {
        node.right = removeItem (node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let rightMinimum = node.right;
        while (rightMinimum.left) {
          rightMinimum = rightMinimum.left;
        }
        node.data = rightMinimum.data;
        node.right = removeItem(node.right, rightMinimum.data);
        return node;
      }
    }
  }

  min() {
    if (!this.groot) {
      return;
    }
    let node = this.groot;
    while (node.left) {
      node = node.left;
    }
    return node.data;

  }

  max() {
    if (!this.groot) {
      return;
    }
    let node = this.groot;
      while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
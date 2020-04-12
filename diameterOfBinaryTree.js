function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var diameterOfBinaryTree = function(root) {
  let diameter = 0

  function traverseTree(node) {
    if (!node) return 0;
    const left = traverseTree(node.left);
    const right = traverseTree(node.right);
    diameter = Math.max(left + right, diameter);
    return Math.max(left, right) + 1;
  }
  traverseTree(root);
  return diameter;

};

/* last
var diameterOfBinaryTree = function(root) {

  function traverseTree(node) {
    var height = 0;
    if(node === null || node === undefined || node.val === null) {
      return height;
    }
    if(node.left && node.left.val || node.right && node.right.val) {
      height += 1;
      if(node.left && node.left.val) {
        height += traverseTree(node.left);
      }
      if(node.right && node.right.val) {
        height += traverseTree(node.right);
      }
    }
    return height;
  }
  if(root === undefined || root === null || root.val === null) { return 0; }
  var left = root.left && root.left.val ? traverseTree(root.left) + 1 : 0;
  console.log('l',left);
  var right = root.right && root.right.val ? traverseTree(root.right) + 1 : 0;
  console.log('r',right);

  var lDiameter = diameterOfBinaryTree(root.left);
  var rDiameter = diameterOfBinaryTree(root.right);

  var diameter = Math.max(left + right, Math.max(lDiameter, rDiameter));
  // var diameter = left + right;
  // var diameter = traverseTree(root);
  return diameter;
};

var tree = new TreeNode(1);  // 0
// tree.left = new TreeNode(2); // 1
// tree.right = new TreeNode(3); // 2
// tree.left.left = new TreeNode(4); // 3
// tree.left.right = new TreeNode(5); // 3
// tree.left.left.left = new TreeNode(6); // 4
// tree.left.left.right = new TreeNode(7);  // 4

// var tree = new TreeNode();  // 0

// var tree = new TreeNode(2);
// tree.left = new TreeNode(3);
// tree.right = new TreeNode(null);
// tree.left.left = new TreeNode(1); // 2


// var tree = new TreeNode(1);  // 0
// tree.left = new TreeNode(2); // 1
// tree.right = new TreeNode(3); // 2
// tree.left.left = new TreeNode(null); // 2
// tree.left.right = new TreeNode(4); // 3
// tree.right.left = new TreeNode(6); // 4
// tree.right.right = new TreeNode(null); // 4
// tree.left.right.left = new TreeNode(null); // 4
// tree.left.right.right = new TreeNode(5); // 5


// tree.left.left.right = new TreeNode(7);  // 4

console.log(JSON.stringify(tree));

diameterOfBinaryTree(tree);

// old

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var diameterOfBinaryTree = function(root) {
  var diameter = 0;

  function traverseTree(node) {
    if(node === null || node === undefined || (node.left === null && node.right === null)) {
      return;
    }
    if(node.val) {
      diameter += 1;
      console.log('check',node.val, 'd',diameter)
    }
    if(node.left && node.right) {
      if(node.left.left !== null || node.left.right !== null) {
        traverseTree(node.left);
      }

      if(node.right.left !== null || node.right.right !== null) {
        traverseTree(node.right);
      }

    } else if(node.left) {
      if(node.left.left !== null || node.left.right !== null) {
        traverseTree(node.left);
      }


    } else if(node.right) {
      if(node.right.left !== null || node.right.right !== null) {
        traverseTree(node.right);
      }


    }
  }

  traverseTree(root);
  console.log('d',diameter);
  // if(diameter > 1 || root && (root.left !== null && root.right !== null)) {
  //   diameter += 1;
  // }
  if(root.left !== null && root.right !== null && root.left.val !== null && root.right.val !== null) { diameter += 1; }
  return diameter;
};

var tree = new TreeNode(1);  // 0
tree.left = new TreeNode(2); // 1
tree.right = new TreeNode(3); // 2
tree.left.left = new TreeNode(4); // 3
tree.left.right = new TreeNode(5); // 3
tree.left.left.left = new TreeNode(6); // 4
tree.left.left.right = new TreeNode(7);  // 4

// var tree = new TreeNode();  // 0

// var tree = new TreeNode(2);
// tree.left = new TreeNode(3);
// tree.right = new TreeNode(null);
// tree.left.left = new TreeNode(1); // 2


// var tree = new TreeNode(1);  // 0
// tree.left = new TreeNode(2); // 1
// tree.right = new TreeNode(3); // 2
// tree.left.left = new TreeNode(null); // 2
// tree.left.right = new TreeNode(4); // 3
// tree.right.left = new TreeNode(6); // 4
// tree.right.right = new TreeNode(null); // 4
// tree.left.right.left = new TreeNode(null); // 4
// tree.left.right.right = new TreeNode(5); // 5


// tree.left.left.right = new TreeNode(7);  // 4

console.log(JSON.stringify(tree));

diameterOfBinaryTree(tree);


*/
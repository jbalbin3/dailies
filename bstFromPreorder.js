/*
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)



Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */



// var bstFromPreorder = function(preorder) {
//   let tree = new TreeNode(preorder[0]);
  // let currentent = tree;
  // let left = null;
  // let generate = true;

  // function makeTree(node,value) {
  //   if(value < tree.val) {
  //     left = true;
  //   } else {
  //     left = false;
  //   }

  //   if(value < node.val) {
  //     node.left = new TreeNode(value);
  //     currentent = generate ? node.left : currentent;
  //     generate = !generate;
  //   } else {
  //     node.right = new TreeNode(value)
  //     currentent = generate ? node.right : currentent;
  //     generate = !generate;
  //   }
  // }

  // for(let i = 1; i < preorder.length; i++) {
  //   makeTree(currentent, preorder[i]);
  // }
  // console.log(JSON.stringify(tree));

  // iterate over input array
  // for(let i = 1; i < preorder.length; i++) {
  //   let left = right = [];
    // check if it goes left or right of node
    // if left (<)
      // add to left of node (push to left)
      // repeat

    // if next num is less than root val
        // if no tree.left, create new node
        // else traverse down tree.left as new node
          // check if it goes left or right of node
      // else

    // else it goes right (>)
      // add to right of node (now becomes parent)

      // if next num is less than root val
        //
      // else
//   }


//   return tree;
// };

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var bstFromPreorder = function(preorder) {
  if (preorder.length === 0) {
      return null;
  }

  let root = new TreeNode(preorder[0]);
  let parents = [root];
  let childrens = [Infinity];

  for (let i = 1; i < preorder.length; i++) {
      const current = new TreeNode(preorder[i]);
      if (current.val < parents[parents.length-1].val) {
          let parent = parents[parents.length-1];
          parent.left = current;
          parents.push(current);
          childrens.push(parent.val);
      } else {
          while (current.val > childrens[childrens.length-1]) {
              const ancestor = parents.pop();
              if (ancestor === parents[parents.length-1].left) {
                  childrens.pop();
              }
          }

          parents[parents.length-1].right = current;
          parents.push(current)
      }
  }

  return root;
};

/* others

// 1
var bstFromPreorder = function(preorder) {

    if (preorder.length === 0) return null;
    if (preorder.length === 1) return new TreeNode(preorder[0]);

    let root = new TreeNode(preorder[0]);

    for (let i = 1; i < preorder.length; i++) {

        root = insertNode(root, preorder[i]);

    }

    return root;
};

const insertNode = (node, val) => {

    if (node === null) return new TreeNode(val);

    if (val < node.val) {
        node.left = insertNode(node.left, val);
    } else {
        node.right = insertNode(node.right, val);
    }

    return node;
}



// 2

var bstFromPreorder = function(preorder) {
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  let root = new TreeNode(preorder[0]);
  return helper(root, preorder);
};

var helper = (node, preorder) => {
  const leftArray = preorder.filter((num) => num < node.val);
  const rightArray = preorder.filter((num) => num > node.val);

  if(leftArray.length > 0) node.left = helper(new TreeNode(leftArray[0]), leftArray);
  if(rightArray.length > 0) node.right = helper(new TreeNode(rightArray[0]), rightArray);

  return node;
}


// 3

var bstFromPreorder = function(preorder) {
  let stack = [], root = null;

  for (let i = 0; i < preorder.length; i++) {
    let node = new TreeNode(preorder[i]);

    if (i === 0) root = node;

    if (stack.length > 0 && stack[stack.length - 1].val > node.val) {
      stack[stack.length -1].left = node;
    }

    let parent = null;
    while (stack.length !== 0 && stack[stack.length - 1].val < node.val) {
      parent = stack.pop();
    }

    if (parent) parent.right = node;

    stack.push(node);
  }

  return root;
};

function helper(preorder, low, high) {
  if (low > high || low === -1) return null;

  let root = new TreeNode(preorder[low]);
  if (low === high) return root;

  let [l1, h1, l2, h2] = findMax(preorder, low + 1, high, preorder[low]);

  root.left = helper(preorder, l1, h1);
  root.right = helper(preorder, l2, h2);

  return root;
}

function findMax(preorder, low, high, value) {
  let min = Infinity, minIdx = -1;

  for (let i = low; i <= high; i++) {
    if (preorder[i] > value) {
      min = preorder[i];
      minIdx = i;
      break;
    }
  }

  if (minIdx === -1) return [low, high, -1, -1];
  else if (minIdx === low) return [-1, -1, low, high];
  else return [low, minIdx - 1, minIdx, high];
}

// 4

var bstFromPreorder = function(preorder) {
    var tree = new TreeNode(preorder[0]);
    var putNode = function(val, node){
        if(!node) {
            node = new TreeNode(val);
            return node;
        }
        else{
            if(val < node.val){
                node.left = putNode(val, node.left);
            } else {
                node.right = putNode(val, node.right);
            }
        }
        return node;
    };
    for(var i = 1; i<preorder.length; i++) {
        tree = putNode(preorder[i], tree);
    }
    return tree;
};





*/

// var tree = new TreeNode(8);
// tree.left = new TreeNode(5);
// tree.right = new TreeNode(10);
// tree.left.left = new TreeNode(1);
// tree.left.right = new TreeNode(7);
// tree.right.right = new TreeNode(12);

bstFromPreorder([8,5,1,7,10,12]);


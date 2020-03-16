/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// input

var tree2str = function(t) {  // ['c','d','e','f']
  // [0,1,2,3,4,5,6,7,8,9] // indexes
  //        0
  //    1       2
  //  3   4    5   6
  // 7 8 910 1112 1314
  // left index = 2*i+1, right index = 2*i+2
  var output = '';
  // add top of tree to output

  var buildStr = function(i) {
    // check left child exist
    if(t[2*i+1] !== undefined) {
      output += '(';
          // console.log('1',output)
      if(t[2*i+1] === null && t[2*i+2] !== undefined) {
        output += ')';
              // console.log('2',output)

      } else {
        output += t[2*i+1];
              // console.log('3',output)

        buildStr(2*i+1);
      }
    }
    // check right child exists
    if(t[2*i+2] !== undefined) {
      output += '('
            // console.log('4',output)

      if(t[2*i+2] !== null) {
        output += t[2*i+2];
              // console.log('5',output)

        buildStr(2*i+2);
      }
    }
    if(i) {
      output += ')';
          // console.log('6',i,output)
    }
  }

  if(t.length) {
    output += t[0];
    buildStr(0);
  }

  return output;

  // if input is not an array but a tree note
  // var tree2str = function(t) {
  //   if (!t) return "";

  //   let result = t.val.toString();

  //   if (t.left || t.right) {
  //       result += "(" + tree2str(t.left) + ")";
  //   }

  //   if (t.right) {
  //       result += "(" + tree2str(t.right) + ")"
  //   }

  //   return result;
  // };
};
// initial w bugs

// var maximalSquare = function(matrix) {
//   let area = 0;
//   let dp = [];
//   for(let i = 0; i < matrix.length; i++) {
//     dp[i] = new Array(matrix[0].length).fill(0);
//   }

//   for(let y = 0; y < matrix.length; y++) {
//     let count = 0;
//     for(let x = 0; x < matrix[0].length; x++)
//       if(matrix[y][x] === '1') {
//         count += 1;
//         if(dp[y][x-1] && y+count < matrix.length && matrix[y+count][x] !== '0') {
//           dp[y][x] = dp[y][x-1] + 1;
//         } else {
//           count = 0;
//           dp[y][x] = 1;
//         }
//         area = Math.max(area,dp[y][x])
//       } else {
//         count = 0;
//       }
//   }
//   return area * area;
// };

/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/



// next interation with bugs


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let length = 0;
  let dp = [];
  for(let i = 0; i < matrix.length; i++) {
    dp[i] = new Array(matrix[0].length).fill(0);
  }

  for(let y = 0; y < matrix.length; y++) {
    let count = 0;
    for(let x = 0; x < matrix[0].length; x++) {
      console.log('x', x, 'y', y, matrix[y][x]);
      if(matrix[y][x] === '1') {
        count += 1;
        console.log('c',count)
        if(y === 1 && x === 1) {
          console.log('check1', dp[y][x-1]);
          console.log('check2',(y === 0 || (y-count >= 0 && matrix[y-count][x] !== '0')));
          console.log('y',y, 'count',count, 'matrix',matrix[y-count][x])
          console.log('???',dp[y][x-1] && (y === 0 || (y-count > 0 && matrix[y-count][x] !== '0')))
        }
        if(dp[y][x-1] && (y === 0 || (y-count >= 0 && matrix[y-count][x] !== '0'))) {
          dp[y][x] = dp[y][x-1] + 1;
          console.log('new dp', dp[y][x])
          if(y-count >= 0 && dp[y][x] === dp[y-count][x]) {
            length = Math.max(length,dp[y][x]);
            console.log('length',length)
          }
        } else {
          count = 0;
          dp[y][x] = 1;
          if(!length) { length = 1; }
        }
        console.log(dp)
      } else {
        count = 0;
        console.log('c',count)
      }
    }
  }
  console.log(matrix);
  console.log(dp);
  return length * length;
};

// var matrix = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]
// var matrix = [[1,1,1,0,0],[1,1,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]

var matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// var matrix = [[],[],[],[]]
// var matrix = [["1","1"],["1","1"]] // 4
// var matrix = [["1","0","1","1","1"],["0","1","0","1","0"],["1","1","0","1","1"],["1","1","0","1","1"],["0","1","1","1","1"]] // 4

maximalSquare(matrix);





var maximalSquare = function (matrix) {
  if (matrix.length === 0) return 0;

  let largest = 0;

  function grab(dp, y, x) {
    return (dp[y] && dp[y][x]) ? dp[y][x] : 0
  }

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[0].length - 1; j >= 0; --j) {
      if (matrix[i][j] === '1') {
        matrix[i][j] = 1 + Math.min(grab(matrix, i + 1, j),grab(matrix, i, j + 1),grab(matrix, i + 1, j + 1));
        largest = Math.max(largest, matrix[i][j]);
      }
    }
  }

  return largest * largest;
};

/// usual

var maximalSquare = function(matrix) {
  var rows = matrix.length,
      cols = rows ? matrix[0].length: 0;
  var dp = [];
  for (let i = 1; i <= rows + 1; i++) {
      let arr = [];
      for (let j = 1; j <= cols + 1; j++) {
          arr.push(0);
      }
      dp.push(arr);
  }

  var maxsqlen = 0;
  for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
          if (matrix[i - 1][j - 1] == '1') {
              dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
              maxsqlen = Math.max(maxsqlen, dp[i][j]);
          }
      }
  }

  return maxsqlen * maxsqlen;
};


// optimal
var maximalSquare = function (matrix) {
  if (matrix.length === 0) return 0;

  let max = 0;
  let dp = Array(matrix.length+1)
    .fill(1)
    .map((_, i) => Array(matrix[0].length+1).fill(0));

  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      if (matrix[i-1][j-1] === '1') {
        dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1])+1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max * max;
};
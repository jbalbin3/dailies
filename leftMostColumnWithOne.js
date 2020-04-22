var leftMostColumnWithOne = function(binaryMatrix) {
  var [row, col] = binaryMatrix.dimensions()

  let result = col;
  var prevOne = prevZero = null;
  var pointer = Math.floor(col/2);

  function search(x,y) {

      let val = binaryMatrix.get(y,x)
      if(val === 1) {
          prevOne = x;
          if(x === 0) { return 0; }
          if(x-1 === prevZero) {
              pointer = x-1;
              return x;
          }
          return search(Math.floor(x/2),y);
      } else {
          prevZero = x;
          if(x+1 === prevOne) {
            pointer = x;
            return prevOne;
          }
          if(x === col-1) { return col; }
          let end = result < col ? result : col - 1;
          if(prevOne) {
            end = Math.min(prevOne,result);
          }
          return search((x + Math.floor((end-x+1)/2)),y);
      }
  }

  for(let y = 0; y < row; y++) {
      let index = search(pointer,y);
      if(index === 0) { return index; }
      result = Math.min(result,index);
  }
  return result < col ? result : -1;
};

// testing
var leftMostColumnWithOne = function(binaryMatrix) {
  // console.log(binaryMatrix.dimensions());
  // let [row,col] = binaryMatrix.dimensions();
  // for testing
  var row = mat[0].length;
  var col = mat.length;
  console.log('row',row,'col',col);
  // end testing
  let result = row;
  console.log('result',result);
  var prevOne = prevZero = null;
  var pointer = Math.floor(row/2);
  console.log('pointer',pointer);

  function search(x,y) {
      // STEP 1
      // val = get(x,y)
      // for testing
      let val = mat[y][x];
      console.log('x',x,'y',y,'val',val);
      // end testing
      if(val === 1) {
          // if val === 1
          prevOne = x;
          console.log('prev1',prevOne);
          if(x === 0) {
            return 0;
          } // done! (no zero found in that row)
          console.log(x-1, 'equal?', prevZero, 'ret',x);
          if(x-1 === prevZero) {
            pointer = x-1;
            return x;
          } // done!
          // else repeat step 1 with new x middle value
          return search(Math.floor(x/2),y);
      } else {
      // if val === 0
          prevZero = x;
          console.log('check',x+1,prevOne)
          if(x+1 === prevOne) {
            pointer = x;
            console.log('newpointer',pointer)
            return prevOne;
          }
          if(x === row-1) {
            console.log('ret row', row);
            return row;
          }

          let end = result < row ? result : row - 1;
          if(prevOne) {
            end = Math.min(prevOne,result);
          }
          console.log('end',end)
          console.log('?',Math.floor((end-x+1)/2));
          return search((x + Math.floor((end-x+1)/2)),y);
      }
  }

  for(let y = 0; y < col; y++) {
      // binary search row and return index of any 1
      let index = search(pointer,y);
      console.log('index',index)
      if(index === 0) { return index; }
      result = Math.min(result,index);
      console.log('result',result)
  }
  console.log('res les row?',result, row)
  return result < row ? result : -1;
};

var mat = [[0,0,0,0,1,1],[0,0,0,1,1,1],[0,0,0,0,1,1],[0,0,0,0,1,1],[0,0,0,1,1,1],[0,0,0,1,1,1]];
var mat = [[0,0,0,1,1,1]];
var mat = [[0,0,0,1,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,1,1,1,1],[0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,1,1,1,1,1],[0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,1,1,1,1,1]]
// var mat = [[0,0,0,1,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1]]
leftMostColumnWithOne(mat)
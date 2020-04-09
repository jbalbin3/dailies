var backspaceCompare = function(S, T) {


  var idx = null;
  var i = 0;
  var j = S.length;
  while(i < j) {
    // console.log('i',i,'char',S[i], 'idx', idx);
    if(S[i] === '#') {
      if(idx === null) {
        S = S.substring(1,j)
        j -= 1;
      } else {
        S = S.substring(0,idx).concat(S.substring(i+1,j))
        if(i > 0) {
          i -= 1;
          j -= 2;
        } else {
          j -= 1;
        }
        idx -= 1;
      }
      // console.log('S',S, 'j', j);
    } else {
      idx = i;
      i += 1;
    }
  }
  // console.log('final',S);

  idx = null;
  i = 0;
  j = T.length;
  while(i < j) {
    console.log('i',i,'char',T[i], 'idx', idx);
    if(T[i] === '#') {
      if(idx === null) {
        T = T.substring(1,j)
        j -= 1;
      } else {
        T = T.substring(0,idx).concat(T.substring(i+1,j))
        if(i > 0) {
          i -= 1;
          j -= 2;
        } else {
          j -= 1;
        }
        idx -= 1;
      }
      console.log('T',T, 'j', j);
    } else {
      idx = i;
      i += 1;
    }
  }
  console.log('S',S)
  console.log('T',T)
  return S === T;

};
                                    // 0123456789
// backspaceCompare("ab#c","ad#c") // true
// backspaceCompare("ab##","c#d#") // true
// backspaceCompare("a##c","#a#c") // true
// backspaceCompare("a#c","b") // false
// backspaceCompare("c##vnvr","c##vn#nvr") // true
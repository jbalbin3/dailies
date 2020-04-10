var backspaceCompare = function(S, T) {

  var backStr = (str) => {
    var idx = null;
    var i = 0;
    var j = str.length;
    while(i < j) {
      if(str[i] === '#') {
        if(idx === null) {
          str = str.substring(1,j)
          j -= 1;
        } else {
          str = str.substring(0,idx).concat(str.substring(i+1,j))
          if(i > 0) {
            i -= 1;
            j -= 2;
          } else {
            j -= 1;
          }
          idx -= 1;
        }
      } else {
        idx = i;
        i += 1;
      }
    }
    return str;
  }

  return backStr(S) === backStr(T);
};
                                    // 0123456789
console.log(backspaceCompare("ab#c","ad#c")) // true
console.log(backspaceCompare("ab##","c#d#")) // true
console.log(backspaceCompare("a##c","#a#c")) // true
console.log(backspaceCompare("a#c","b")) // false
console.log(backspaceCompare("c##vnvr","c##vn#nvr")) // true
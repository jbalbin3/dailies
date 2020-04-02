var isHappy = function(n) {
  var memo = {};
  function checkLoop(num) {
    var nStr = num.toString();
    var sum = 0;
    for(let i=0; i < nStr.length; i++) {
      sum += Math.pow(parseInt(nStr[i]), 2);
    }
    if(sum === 1) {
      return true;
    }
    if(memo[sum]) {
      console.log('loop', sum);
      return false;
    } else {
      memo[sum] = sum;
      console.log(memo);
      return checkLoop(sum);
    }
  }
  return checkLoop(n);
};

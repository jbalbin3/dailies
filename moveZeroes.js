var moveZeroes = function(nums) {
  var i=0
  var j=0;
  while(j < nums.length) {
      if(!nums[i]) {
          nums.push(nums.splice(i,1)[0])
      } else {
          i++;
      }
      j++;
  }
};
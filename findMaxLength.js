var findMaxLength = function(nums) {
  var max = count = 0;
  if(nums.length < 2) { return max; }
  var index = {0: -1};
  for(let i in nums) {
    count += nums[i] ? 1 : -1;
    if(index[count]) {
      max = Math.max(max, i - index[count])
    } else {
      index[count] = i;
    }
  }
  return max;
};

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
  console.log(max);
  return max;
};

findMaxLength([1,1,1,1]) // 0
findMaxLength([1,1,1]) // 0
findMaxLength([0,0,0,0]) // 0
findMaxLength([0,1]) // 2
findMaxLength([0,1,0]) // 2
findMaxLength([1,1,0]) // 2 <---
findMaxLength([0,0,0,1,0,0]) // 2 <---
findMaxLength([0,1,0,1]) // 4
findMaxLength([0,1,0,1,0]) // 4
findMaxLength([1,0,0,1]) // 4
findMaxLength([1,1,0,0,1,0]) // 6
findMaxLength([0,0,0,1,1,1]) // 6
findMaxLength([0,0,0,1,0,1]) // 4 <---

// findMaxLength([1,0,0,0,1,1,1]) // 6
// findMaxLength([0,0,0,1,1,1,0,1]) // 8
// findMaxLength([0,0,0,1,1,1,0,1]) // 8

// findMaxLength([0,1,1,0,1,0]) // 6

// findMaxLength([0,1,1,0,1,1,0]) // 4

// findMaxLength([0,1,1,0,1,1,1,0]) // 4
// findMaxLength([0,0,1,0,0,0,1,1,0]) // 6 <--
// findMaxLength([0,0,1,0,0,0,1,1,1]) // 8 <--

// findMaxLength([0,0,1,0]) // 2 <--

findMaxLength(
  [1,1,1,1,1,1,1,0,0,0,
   0,1,1,0,1,0,0,1,1,1,
   1,1,1,1,1,1,0,0,0,0,
   1,0,0,0,0,1,0,1,0,0,
   0,1,1,0,0,0,0,1,0,0,
   1,1,1,1,1,0,0,1,0,1,
   1,0,0,0,1,0,0,0    ,1,1,
   1,0,1,1,0,1,0,0,1,1,
   0,1,0,0,1,1,1,0,0,1,
   0,                  1,1,1,0,0,1,0,1,1]); // 94

findMaxLength([0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1]);
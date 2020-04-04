var maxSubArray = function(nums) {
  var max = nums[0];
  var sum = 0;
  for(i in nums) {
    sum = nums[i] > (nums[i] + sum) ? nums[i] : (nums[i] + sum);
    max = max > sum ? max : sum;
  }
  return max;
};

// console.log(maxSubArray([5,-5, 2, 4, -5]));
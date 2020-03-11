/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.



Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation:
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1).
For nums[3]=2 there exist one smaller number than it (1).
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]


Constraints:

2 <= nums.length <= 500
0 <= nums[i] <= 100

*/

// i: an array of numbers, with array length >= 2 and <= 500, numbers in array are 0-100
// o: an array of numbers showing the count of how many numbers are smaller than current from input
// c: no time/space complexity, 10 to do problem,
// e:
var smallerNumbersThanCurrent = function(nums) {
  // initialize variable output array
  var output = [];
  // initialize count to keep track of how many, count equals 0
  var count = 0;
  // iterate through targets
  for(let j=0; j < nums.length; j++) {
      // iterate through the input array nums
      for(let i=0; i < nums.length; i++) {
      // if target index is equal to current index, skip
          if(i != j) {
              // if num at target index < num at current index, then increment count
              if(nums[j] > nums[i]) {
                  count += 1;
              }
          }
      }
      // push count into output array and set count back to zero and increment target index by 1
      output.push(count);
      count = 0;
  }

  // return output
  return output;
};


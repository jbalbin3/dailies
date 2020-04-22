/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

example: [1,1,1],2
[1,1],[1,1] = 2 sub arrays

[3,3,4,2],6
[3,3],[4,2] = 2

[3,3,3,3],6
[3,3],[3,3],[3,3] = 3
*/

// initialize count and sum variables to zero
// iterate nums array at index
  // iterate sub array starting at current nums index
    // sum += value of current sub array
    // check if sum = target sum
     // if equal
       // increment count
       // initialize sum back to zero
       // go back to iterating next nums
     // if not equal
       // grab next number in sub array




       var subarraySum = function(nums, k) {
        let arr = [];
        let count = 0;
        for(let i = 0; i < nums.length; i++) {
          let sum = nums[i];
          if(sum === k) {
            count += 1
            console.log('hit1', sum, nums[i])
          }
          // if(sum + nums[i-1] === k) {
          //   count += 1
          //   console.log('hit2', sum, '+',nums[i-1])
          // }
          for(let j =  arr.length-1; j >= 0; j--) {
            sum = nums[i]+arr[j];
            arr.push(sum);
            console.log('arr p1',arr);
            if(sum === k) {
              count += 1
              console.log('hit2', nums[i],arr[j])
            }
          }

          arr.push(nums[i]);
          console.log('arr added',arr, i);
          arr = arr.slice(i)
          // for(let k = 0; k < i; k++) {
          //   arr.shift();
          //   console.log('arr shift',arr);
          // }
          console.log('slice',arr);

        }
        return count;
      };

      subarraySum([1,2,3,-2,0,5,-2,6,-3,2,2,1],3);
      subarraySum([1,2,3,-2,0,5,-2],3);
      /*
      [1]
      [3,2]
      [5,6,3]
      [1,4,3,-2]
      [-2,3,4,1,0]
      [5,6,9,8,3,5]
      */
      //1,2
      //3
      //2,3,-2
      //2,3,-2,0
      //-2,0,5
      //5,-2
      //0,5,-2




      // [1] , [3,2], [5,6,3], [1,4,3,-2]+0 , [-2,3,4,1,0]+5,
      // [5,6,9,8,3,5]+-2
      //1,2
      //3
      //2,3,-2
      //2,3,-2,0
      //-2,0,5
      //5,-2
      //
      //-2,6
      //6,-3
      //2,1

// sol 2

var subarraySum = function(nums, k) {
  let counter = 0
  for (let i=0; i<nums.length; i++) {
      let sum = 0
      for (let j=i; j<nums.length; j++) {
          sum = sum + nums[j]
          if (sum === k) {
              counter ++
          }
      }
  }
  return counter
}

// optimal
var subarraySum = function(nums, k) {
  let sum = 0;
  let counter = 0;
  let sumMap = new Map();
  sumMap.set(0, 1);

  nums.forEach(num => {
    sum += num;
    const diff = sum - k;
    if (sumMap.has(diff)) {
      counter += sumMap.get(diff);
    }
    sumMap.set(sum, sumMap.get(sum) + 1 || 1);
  });

  return counter;
};

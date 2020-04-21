// solution 1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 target = "0"
 start = 0 -> 4
 end = 7 -> 4
 mid = 3 -> 5 -> 4
 nums[mid] = "1"
 nums[start] = "0"
 */
var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1

  while(start <= end) {
      let mid = Math.floor((start + end)/2)

      if(nums[mid] === target) return mid

      if(nums[start] <= nums[mid]) {
          if(nums[start] <= target && target < nums[mid]) {
              end = mid-1
          } else {
              start = mid + 1
          }
      } else {
          if(nums[mid] < target && target <= nums[end]) {
              start = mid + 1
          } else {
              end = mid - 1
          }
      }
  }
  return -1
};

// mine
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var index = 0;
  function checkArray(array, left) {
    if(!array.length)
     { return -1 };
    if(target === array[0]) {
      if(index === 0) {
        return index;
      } else if(left) {
        return index - 1;
      } else {
        return index + 1;
      }
    }
    if(target === array[array.length-1]) {
      if(index === 0) {
        return array.length-1;
      } else if(left) {
        return index - 1;
      } else {
        return index + 1;
      }
    }
    var mIdx = Math.floor(array.length/2);
    if(index === 0) {
      index = mIdx;
    } else if(left) {
      index -= (array.length - mIdx);
    } else {
      index += mIdx + 1;
    }
    if(target === array[mIdx]) {
      return index;
    }

    if((array[0] > array[mIdx] && ((target < array[0] && target < array[mIdx]) || target > array[array.length-1])) ||
      (array[0] < array[mIdx] && target > array[0] && target  < array[mIdx])) {
        return checkArray(array.slice(0,mIdx), true);
    } else {
      return checkArray(array.slice(mIdx+1,array.length), false);
    }
  }

  return checkArray(nums, true);
};


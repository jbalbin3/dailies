var sortColors = function(nums) {
  var i = 0;
  var j = 0;
  while(i < nums.length) {
      var temp = nums.shift();
      if(temp === 2) {
          nums.push(temp);
      } else if(temp === 0) {
          j += 1;
          nums.splice(nums.length-i, 0, temp);
      } else {
          nums.splice(nums.length-i+j, 0, temp);
      }
      i += 1;
  }
};

  // sortColors([2,0,2,1,1,0])
  // sortColors([1,0]);
  // sortColors([0,1,2]);
  // sortColors([0,0,1]);
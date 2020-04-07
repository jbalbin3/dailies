var countElements = function(arr) {

  var memo = {};
  var count = 0;
  for(let num of arr) {
    if(!memo[num]) {
      memo[num] = 1;
    } else {
      memo[num] += 1;
    }
  }
  console.log(JSON.stringify(memo));
  for(let key in memo) {
    if(memo[parseInt(key)-1]) {  // &&
    // (memo[parseInt(key)-1] === memo[key] || memo[parseInt(key)-1] + 1 === memo[key])) {
    // memo[parseInt(key)-1] === memo[key] ||  memo[parseInt(key)-1] < memo[key]) {
      count += memo[parseInt(key)-1] !== memo[key] ? memo[parseInt(key)-1] : memo[key];
    }
  }
  console.log(count);
};
countElements([1,2,3]) // 2
countElements([1,1,3,3,5,5,7,7]) // 0
countElements([0,1,2,3,3,5]) // 3
countElements([1,1,2,2,3]) //
countElements([1,1,2]) // 2
var groupAnagrams = function(strs) {
  // var result = [];
  var memo = {};
  for(let i = 0; i < strs.length; i++) {
    var temp = strs[i].split('').sort().join('');
    if(!memo[temp]) {
      memo[temp] = [strs[i]];
    } else {
      memo[temp].push(strs[i]);
    }
  }
  // console.log(JSON.stringify(memo));
  // for(key in memo) {
  //   result.push(memo[key]);
  // }
  // console.log(result);
  // return result;
  return Object.values(memo);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let t1 = text1.length;
  let t2 = text2.length;
  let dp = [];
  for(let i = 0; i <= t1; i++) {
    dp[i] = new Array(t2+1)
  }
  console.log('dp',dp)
  for(let i = 0; i <= t1; i++) {
    for(let j = 0; j <= t2; j++) {
      if(i === 0 || j === 0) {
        console.log('i n j', i,j)
        dp[i][j] = 0;
        console.log('dpnow',dp);

      } else {
        console.log('check',text1[i - 1], text2[j - 1])
        dp[i][j] = (text1[i - 1] === text2[j - 1]) ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1])
        console.log('new dp', dp)
      }
    }
  }
  console.log('ret corner dp', dp)
  return dp[t1][t2]
};

longestCommonSubsequence('abcde','ace')
longestCommonSubsequence('abc','abc')
longestCommonSubsequence('abc','def')

// better

var longestCommonSubsequence = function(text1, text2) {
    let temp = [];
    let max= 0;
    for(let i = 0 ; i < text1.length +1; i++){
        temp[i] =  new Array(text2.length+1).fill(0);
    }

    for(let i = 1; i < temp.length;i++){

        for(let j = 1; j < temp[i].length;j++){

            if(text1[i-1] == text2[j-1]){

                temp[i][j] = temp[i-1][j-1] + 1
            }else{

                temp[i][j] = Math.max(temp[i-1][j],temp[i][j-1])
            }

            max = Math.max(max,temp[i][j])
        }
    }


   // console.log(max)

    return max

var maxProfit = function(prices) {
  var low = prices[0];
  var profit = 0;

  for(i in prices) {
    if(prices[i] > low) {
      profit += prices[i] - low;
    }
    low = prices[i]
  }
  return profit;
};
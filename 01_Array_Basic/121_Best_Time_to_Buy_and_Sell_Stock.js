//Problem Statement: Given an array prices where each element represent stock prices of Ith day. Here we need to choose a single day to buy one stock which will give maximum profit then other days and sell it in next future day with maximum profit.

/*
Approach: 
- We'll track the minimum value to buy the stock for maximum profit.
- Parallelly we'll also track the maximum profit in each iteration.
- We'll check the current price if it's less then minimum value(last min price) then we'll update the last min price with current price.
- Now if current price is higher than last min price then we'll check whether current selling price is profitable or last selling price was based on that we'll update the maximum profit. 
*/

var maxProfit = function (prices) {
  let minVal = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minVal) {
      minVal = prices[i];
    } else {
      let profit = prices[i] - minVal;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); //0

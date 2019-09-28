/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了95.87%的用户
  //  内存消耗 :35.8 MB, 在所有 JavaScript 提交中击败了30.43%的用户

  //  实际上也是只存三个变量，分别表示当前的min，以及上一阶，上两阶的消耗
  //  嘛。。。但是这样写起来简单一点。嘻嘻嘻

  const dp = [0, 0];

  cost.push(0);

  for (let i = 0, length = cost.length; i < length; i++) {
    dp[i + 2] = Math.min(dp[i] + cost[i], dp[i + 1] + cost[i]);
  }

  return dp[dp.length - 1];
};

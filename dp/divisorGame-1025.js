/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  //  执行用时 :64 ms, 在所有 JavaScript 提交中击败了95.76%的用户
  //  内存消耗 :34.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户

  //  其实不是很懂这个题。。和dp有啥关系。。。虽然我存了一个dp的数组，，但是实际上是完全不需要的。。我只需要存一个变量就ojbk了。。

  let dp = [N];
  let isAlice = true;

  while (true) {
    let div = 0;

    for (let i = 1, max = dp[dp.length - 1]; i < max; i++) {
      if (max % i === 0) {
        div = i;
        break;
      }
    }

    if (div) {
      dp.push(dp[dp.length - 1] - div);
      isAlice = !isAlice;
    } else {
      return !isAlice;
    }
  }
};

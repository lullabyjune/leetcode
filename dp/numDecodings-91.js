/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  //  执行用时 :64 ms, 在所有 JavaScript 提交中击败了99.38%的用户
  //  内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了17.86%的用户

  //  看了一眼提交记录。一个月之前。-0-.应该是回溯暴力解的。8000多ms。大概当时不太会dp吧。虽然最近也没练0-0.。。
  //  嘿嘿。反正现在是直接dp很快就写出来了，不过就这个题而言还是改了三四次吧，因为一些边界问题一开始没处理好。
  //  代码么。。。也不是很优雅。。。if太多了。。但是 不想改了。嘻嘻嘻

  const dp = [1, 1];

  if (s[0] === "0") return 0;

  for (let i = 0, length = s.length; i < length; i++) {
    let tmpStr = s.slice(i - 1, i + 1);

    if (s[i] === "0") {
      if (s[i - 1] === "0" || tmpStr > 26) return 0;

      dp[i + 2] = dp[i];

      continue;
    }

    if (i >= 1 && tmpStr <= 26 && tmpStr > 0) {
      dp[i + 2] = tmpStr[0] === "0" ? dp[i] : dp[i] + dp[i + 1];

      continue;
    }

    dp[i + 2] = dp[i + 1];
  }

  return dp[dp.length - 1];
};

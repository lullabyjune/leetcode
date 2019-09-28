/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  //  执行用时 :84 ms, 在所有 JavaScript 提交中击败了76.50%的用户
  //  内存消耗 :38.7 MB, 在所有 JavaScript 提交中击败了50.00%的用户

  //  这个就有点dp的感觉了0-0

  if (!s.length) return true;

  const dp = new Array(s.length).fill(false);

  let currentIndex = 0;

  for (let i = 0, length = t.length; i < length; i++) {
    if (s[currentIndex] !== t[i]) continue;

    dp[currentIndex++] = true;
  }

  return dp[dp.length - 1];
};

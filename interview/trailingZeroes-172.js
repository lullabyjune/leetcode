/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了85.66%的用户
  //  内存消耗 :34 MB, 在所有 JavaScript 提交中击败了56.36%的用户

  //  这个题。。有点秒- -？
  //  我反正是没想到怎么用O(log n)的求解。。只能想到先计算阶乘再去数0，怎么也是O(n)
  //  结果居然是因式分解数5的个数。。。惊了。

  let count = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了93.16%的用户
  //  内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了86.50%的用户

  //  似乎还可以用快慢指针，但是没太想到，是看题解才看到的
  //  大概是这种有环的解构，其实都可以用快慢指针的思想去做？反正肯定会在环中相遇。

  let happySet = new Set();
  let tmp = n;

  while (!happySet.has(n)) {
    let result = 0;

    while (tmp) {
      result += (tmp % 10) ** 2;

      tmp = Math.floor(tmp / 10);
    }

    if (result === 1) return true;

    happySet.add(n);

    tmp = result;
    n = result;
  }

  return false;
};

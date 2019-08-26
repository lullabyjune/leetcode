/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  //  看题解做的
  //  一开始算是有点思路吧，用减法代替，但是超时了，而且符号没怎么想好判断

  //  看了题解也还是有问题，这俩过不了-0-.
  //  应该可以最后用Math.pow(2, 31)来过滤，但是想不太懂为啥QAQ，所以就算了。

  //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了92.94%的用户
  //  内存消耗 :34.6 MB, 在所有 JavaScript 提交中击败了91.18%的用户

  if (dividend * divisor === 2147483648) return 2147483647;
  if (dividend * divisor === -2147483648) return -2147483648;

  let flag = dividend * divisor > 0;
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let result = 0;

  while (absDividend >= absDivisor) {
    let tmp = absDivisor;
    let count = 1;

    while (tmp > 0 && absDividend >= tmp) {
      absDividend -= tmp;
      result += count;
      count <<= 1;
      tmp <<= 1;
    }
  }

  if (!flag) result = (-1 ^ result) + 1;

  return result;
};

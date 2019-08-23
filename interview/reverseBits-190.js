/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  //  这大概是最蠢的方法，原谅我不懂位运算- -，甚至都忘了无符号要怎么取了。

  //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了92.03%的用户
  //  内存消耗 :36.5 MB, 在所有 JavaScript 提交中击败了7.06%的用户

  let str = n.toString(2);

  str = "0".repeat(32 - str.length) + str;

  let result = "";

  for (let length = str.length, i = length - 1; i >= 0; i--) {
    result += str[i];
  }

  return parseInt(result, 2);
};

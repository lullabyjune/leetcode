/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了94.21%的用户
  //  内存消耗 :35.3 MB, 在所有 JavaScript 提交中击败了65.42%的用户

  //  我觉得吧。。这个题，最大的挑战就是看懂那个sb题目想表达什么意思- -。

  let str = "1";

  for (let i = 1; i < n; i++) {
    let tmpStr = "";
    let currentNumber = str[0];
    let currentCount = 1;

    for (let j = 1, length = str.length; j < length; j++) {
      if (str[j] !== currentNumber) {
        currentCount && (tmpStr += currentCount + currentNumber);

        currentNumber = str[j];
        currentCount = 1;

        continue;
      }

      currentCount++;
    }

    if (currentCount) {
      tmpStr += currentCount + currentNumber;
    }

    str = tmpStr;
  }

  return str;
};

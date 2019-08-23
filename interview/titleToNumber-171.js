/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  //  执行用时 :96 ms, 在所有 JavaScript 提交中击败了82.17%的用户
  //  内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了47.33%的用户

  //  0-0以前在剑指offer上做过类似的，当时不会做来着-0-
  //  emmmm，其实当成进制来想就简单很多了，26进制。然后对比十进制的算法。嘻嘻嘻

  let sArray = s.split("");
  let result = 0;

  const getCharValue = char => char.charCodeAt(0) - 64;

  for (let char of sArray) {
    let charValue = getCharValue(char);

    result = result * 26 + charValue;
  }

  return result;
};

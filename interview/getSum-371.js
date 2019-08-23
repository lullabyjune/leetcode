/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  //  看题解 + 1， 位运算依然不太会.jpg, 知道要用位运算，但是不知道怎么算-w-

  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了77.93%的用户
  //  内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了50.54%的用户

  let toNext = 0;

  while (b) {
    toNext = (a & b) << 1;
    a ^= b;
    b = toNext;
  }

  return a <= Number.MAX_SAFE_INTEGER ? a : ~a;
};

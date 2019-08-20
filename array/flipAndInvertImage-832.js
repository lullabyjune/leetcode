/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  //  执行用时 :100 ms, 在所有 JavaScript 提交中击败了63.05%的用户
  //  内存消耗 :36.9 MB, 在所有 JavaScript 提交中击败了5.26%的用户

  for (let array of A) {
    array = array.reverse();

    for (let [index] of array.entries()) {
      if (array[index] === 1) array[index] = 0;
      else array[index] = 1;
    }
  }

  return A;
};

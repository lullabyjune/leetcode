/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  //  一开始没想到二分-0-.。看题解做了出来
  //  一开始想的就是利用矩阵特性去做，但是感觉又不太好下手- - 。暴力flat-sort又太傻比了。。
  //  居然会是二分。。真的一开始没想到的。。

  //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了97.40%的用户
  //  内存消耗 :37 MB, 在所有 JavaScript 提交中击败了100.00%的用户

  let rows = matrix.length;
  let cols = rows;
  let left = matrix[0][0];
  let right = matrix[rows - 1][cols - 1];

  const findCountNotBiggerMid = mid => {
    let row = rows - 1;
    let col = 0;
    let count = 0;

    while (row >= 0 && col < cols) {
      if (matrix[row][col] <= mid) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }

    return count;
  };

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    let count = findCountNotBiggerMid(mid);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

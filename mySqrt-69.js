/**
 * @param {number} x
 * @return {number}
 *
 *  二分查找0-0
 */
var mySqrt = function(x) {
  //  执行用时 :100 ms, 在所有 JavaScript 提交中击败了84.26%的用户
  //  内存消耗 :35.3 MB, 在所有 JavaScript 提交中击败了76.28%的用户
  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let square = Math.pow(mid, 2);

    if (square === x) {
      return mid;
    }

    if (square < x && Math.pow(mid + 1, 2) > x) {
      return mid;
    }

    if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了94.82%的用户
  //  内存消耗 :35.4 MB, 在所有 JavaScript 提交中击败了68.95%的用户

  // let left = 1;
  // let right = x;

  // while (left < right) {
  //   let mid = Math.floor(left + (right - left) / 2);

  //   if (x > mid * mid) {
  //     left = mid + 1;
  //   } else {
  //     right = mid;
  //   }
  // }

  // return x === right ** 2 ? right : right - 1;
};

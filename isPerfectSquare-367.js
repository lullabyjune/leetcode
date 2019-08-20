/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  //  执行用时 :56 ms, 在所有 JavaScript 提交中击败了99.30%的用户
  //  内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了66.00%的用户

  //  标准的二分模板了这个就是-0-.
  let left = 0;

  let right = num;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    let square = mid ** 2;

    if (square === num) {
      return true;
    }

    if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;

  // let left = 0;
  // let right = num;

  // while (left < right) {
  //   let mid = left + Math.floor((right - left) / 2);

  //   if (mid ** 2 < num) {
  //     left = mid + 1;
  //   } else {
  //     right = mid;
  //   }
  // }

  // return left ** 2 === num;
};

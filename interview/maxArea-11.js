/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  //  ??? 纯暴力居然还过了。。

  //  执行用时 :900 ms, 在所有 JavaScript 提交中击败了38.93%的用户
  //  内存消耗 :35.3 MB, 在所有 JavaScript 提交中击败了83.79%的用户

  let max = 0;

  for (let i = 0, length = height.length; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      let square = (j - i) * Math.min(height[i], height[j]);

      max = Math.max(square, max);
    }
  }

  return max;

  //  双指针。。
  //  双指针牛逼（破音

  //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了91.05%的用户
  //  内存消耗 :35.3 MB, 在所有 JavaScript 提交中击败了83.79%的用户

  // let max = 0;
  // let first = 0;
  // let tail = height.length - 1;

  // while (first !== tail) {
  //   let tmp = (tail - first) * Math.min(height[tail], height[first]);

  //   max = Math.max(tmp, max);

  //   if (height[first] <= height[tail]) {
  //     first++;
  //   } else {
  //     tail--;
  //   }
  // }

  // return max;
};

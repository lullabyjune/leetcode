/**
 * @param {number[]} nums
 * @return {number}
 *
 *  二分查找+1
 */
var findMin = function(nums) {
  //  执行用时 :64 ms, 在所有 JavaScript 提交中击败了98.95%的用户
  //  内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了52.78%的用户

  //  说是二分的高级版本-0-.感觉和第一版的区别只是这一种的话，因为是left < right，所以保证了至少在区间内是有两个元素的，
  //  所以说可以在区间内部进行比较，不像一开始那种就只能保证一个元素，也就无法在区间内进行操作。
  //  但是这种的话就因为 left < right，所以后面的right = mid，不然的话会有漏掉的好像是-0-.

  //  最后一说，这个edge的变量，感觉好难受，但是又好像必须得有，就很烦了。

  let left = 0,
    right = nums.length;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2),
      edge = right === nums.length ? right - 1 : right;

    if (nums[mid] > nums[edge]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

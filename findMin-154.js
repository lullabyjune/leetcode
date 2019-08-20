/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了90.28%的用户
  //  内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了61.90%的用户

  //  这个居然是困难的题- -，感觉其实就是153的一点变形，在原本二分的基础上加一点条件判断了而已- -

  let left = 0;
  let right = nums.length;
  let edge = right - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[edge]) {
      left = mid + 1;
    } else if (nums[mid] === nums[edge]) {
      let index = mid,
        isReserve = false;

      while (index < edge) {
        if (nums[index++] !== nums[edge]) {
          isReserve = true;
          break;
        }
      }

      if (isReserve) {
        left = mid + 1;
      } else {
        right = mid;
      }
    } else {
      right = mid;
    }

    edge = right === nums.length ? right - 1 : right;
  }

  return nums[left];

  //  评论里面看到的解法，虽然思路和我差不太多，但是代码少了很多0-0
  //  就是没在 == 的情况去做判断了，而是直接right--然后丢到下一次循环去判断0-0，估计也不会比我那个多几次循环，因为本质上来说我那个在==的时候也是跑的循环的。区别其实不是很大
  //  就是他这个看着会舒服很多0-0，不过得想想才能清楚，不像我那个那么简单直接吧。

  // let left = 0,
  //     right = nums.length - 1

  // while (left < right) {
  //     let mid = left + Math.floor((right - left) / 2)

  //     if (nums[mid] > nums[right]) {
  //         left = mid + 1
  //     } else if (nums[mid] < nums[right]) {
  //         right = mid
  //     } else {
  //         right--
  //     }

  // }

  // return nums[left]
};

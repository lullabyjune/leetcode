/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let length = nums.length;
  let i = length - 2;

  const swap = (a, b) => {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  };

  const reverse = start => {
    let end = length - 1;

    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  };

  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i >= 0) {
    let j = length - 1;

    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    swap(i, j);
  }

  reverse(i + 1);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let length = nums.length;

  let currentSum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < length; i++) {
    let prev = i + 1;
    let last = length - 1;

    while (prev < last) {
      let sum = nums[i] + nums[prev] + nums[last];

      if (Math.abs(target - sum) < Math.abs(target - currentSum)) {
        currentSum = sum;
      }

      if (sum === target) {
        return sum;
      }

      if (sum < target) {
        prev++;
      } else {
        last--;
      }
    }
  }

  return currentSum;
};

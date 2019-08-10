/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  let stack = []
  let min = Number.MIN_SAFE_INTEGER
  
  for (let length = nums.length, i = length - 1; i >= 0; i--) {
      if (nums[i] < min)  return true
      
      while (stack.length && nums[i] > stack[stack.length - 1]) {
          min = stack.pop()
      }
      stack.push(nums[i])
  }
  
  return false
};

let arr = [1, 0, 1, -4, -2, -3]
console.log(find132pattern(arr))
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let ranges = [],
      before = nums[0],
      tmp = [nums[0]],
      length = nums.length
  
  if (!length)    return []
  
  for (let i = 1; i < length; i++) {
      if (nums[i] - before !== 1) {
          if (tmp[0] !== before)  tmp.push(before)
          
          ranges.push(tmp.join('->'))
          tmp = [nums[i]]
      }
      
      before = nums[i]
  }
  
  if (tmp[0] !== nums[length - 1]) {
      tmp.push(nums[length - 1])
  }
  
  return [...ranges, tmp.join('->')]
};
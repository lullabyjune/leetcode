/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  function getLess (arr) {
    // console.log(arr)
      if (arr.length <= 1) {
        console.log(arr[0] || 0)
          return arr[0] || 0
      }
      
      arr.sort((a, b) => b - a)
      
      let max = arr.shift(),
          secMax = arr.shift()
      
      if (max !== secMax) {
          arr.unshift(max - secMax)
      }
      
      return getLess(arr)
  }
  
  return getLess(stones)
};

console.log(lastStoneWeight([2,7,4,1,8,1]))
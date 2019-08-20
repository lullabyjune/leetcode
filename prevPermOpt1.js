/**
 * @param {number[]} A
 * @return {number[]}
 */
var prevPermOpt1 = function(A) {
  let isIncrement = true,
      length = A.length,
      max = '0'
  
  function findSuitable (index) {
      let aimNum = A[index],
          max = Number.MAX_SAFE_INTEGER,
          maxIndex = -1
      
      for (let i = index - 1; i >= 0; i--) {
          if (A[i] > aimNum) {
              max = A[i]
              maxIndex = i
              break;
          }
      }

      console.log(aimNum, max, index)
      
      return maxIndex === -1 ? -1 : {
          num: max,
          numIndex: maxIndex
      }
  }
  
  for (let i = 0; i < length - 1; i++) {
      if (A[i] > A[i + 1]) {
          isIncrement = false
          break
      }
  }
  
  if (!isIncrement) {
      for (let i = length - 1; i >= 0; i--) {
          let canUse = findSuitable(i)

          console.log(canUse)
          if (canUse !== -1) {
              let arr = A.slice()
              let tmp = arr[i]
              arr[i] = canUse.num
              arr[canUse.numIndex] = tmp

              max = arr.join('') > max ? arr.join : max
          }
      }
  }
  
  return A
};

let arr = [1,9,4, 8, 6,7]

// arr = [3, 2, 1]
// arr = [1, 1, 5]
// arr = [3, 1, 1, 3]
// arr = [1,9,6,7,9,6,4,4,2,2,7,7,7,6,3,5,7,7,3,8,8,4,4,1,5,4,7,4,7,3,7,5,4,1,7,4,9,6,5,9,8,9,9,4,6,6,5,5,7,7,8,1,4,6,4,5,4,4,8,9,5,7,2,4]
arr = [6,1,5,9,1,1,9,7,7,9,7,6,2,7,3,4,5,1,7,6,3,5,3,1,4,7,1,1,8,8,9,1,9,5,1,6,5,4,7,3,2,7,4,9,7,6,2,5,7,4,3,7,5,5,4,4,2,1,3,1,6,4,8,7,5,9,3,1,4,4,7,5,3,7,2,4,4,8,5,4,8,1,1,3,4,3,5,4,8,1,5,4,9,8,4,5,3,1,1,3]


console.log(prevPermOpt1(arr))
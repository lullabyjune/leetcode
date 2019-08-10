/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let grumpyArr = [],
      total = 0,
      max = 0,
      maxIndex = -1,
      length = customers.length,
      totalTimes = 0
  
  
  function getSum (index) {
      let sum = 0,
          times = 0
      
      for (let i = 0; i < length; i++) {
        if (i !== index) {
          if (grumpy[i] === 0) {
            sum += customers[i]
          }
        } else {
          let j = index
          for (; j < length && times < X; j++, times++) {
            sum += customers[j]
          }

          i = --j
        }
      }
      
      return sum
  }
  
  grumpy.forEach((el, index) => {
      if (el === 1) {
          grumpyArr.push(index)
      }
  })

  if (grumpyArr.length === 0) {
    max = getSum(0)
  } else {
    grumpyArr.forEach(el => {
        let tmp = getSum(el)
        
        if (tmp >= max) {
            max = tmp
            maxIndex = el
        }
    })
  }
  
  
  
  
  // for (let i = maxIndex; i < length && totalTimes < X; i++, totalTimes++) {
  //     grumpy[i] = 0
  // }
  
  // customers.forEach((el, index) => {
  //     if (grumpy[index] === 0) {
  //         total += el
  //     }
  // })
  
  return max
};

let arr1 = [4, 10, 10],
    arr2 = [1, 1, 0],
    max = 2

arr1 = [1]
arr2 = [0]
max = 1

console.log(maxSatisfied(arr1, arr2, max))
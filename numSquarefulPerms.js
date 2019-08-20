/**
 * @param {number[]} A
 * @return {number}
 */
var numSquarefulPerms = function(A) {
  let res = [],
      cache = {}
  
  const canSqrt = (function () {
      const cache = {}
      
      return (num) => {
          if (!cache[num]) {
              let sqrtNum = Math.sqrt(num)
              cache[num] = Math.floor(sqrtNum) === sqrtNum
          }
          
          return cache[num]
      }
  })()
  
  const findNext = (nowArr, restArr) => {
      if (!restArr.length) {
          let str = nowArr.join()
          res.indexOf(str) === -1 ? res.push(str) : ''
          return
      }
      
      let nowArrStr = nowArr.join(),
          restArrStr = restArr.join()

      if (cache[nowArrStr] === restArrStr)  return
      
      let last = nowArr[nowArr.length - 1]
      // restArr.forEach((num, index) => {
      //     if (canSqrt(num + last)) {
      //         findNext([...nowArr, num], restArr.filter((el, innerIndex) => index !== innerIndex))
      //     }
      // })
      for (let i = 0, length = restArr.length; i < length; i++) {
          if (canSqrt(restArr[i] + last)) {
              findNext([...nowArr, restArr[i]], restArr.filter((el, innerIndex) => i !== innerIndex))
          } else {
              cache[nowArrStr] = restArrStr
          }
      }
  }
  
  if (A.length < 2) return 0
  if (A.length >= 2 && new Set(A).size === 1) {
  if (canSqrt(A[0] + A[1])) return 1
      return 0
  }
  
//     let set = new Set(A)
//     if (set.size === 2 && A.includes(1) && A.includes(0)) {
//         let oneNums = 0,
//             zeroNums = 0

//         A.forEach(num => {
//           num === 1 ? oneNums++ : zeroNums++
//         })

//         if (oneNums > zeroNums) return 0

//         return oneNums + 1
//     }
  
  A.forEach((num, index) => {
      findNext([num], A.filter((el, innerIndex) => index !== innerIndex))
  })
  
  return res.length
};
// console.log(numSquarefulPerms([1,17,8]))
// console.log(numSquarefulPerms([2, 2, 2]))
// console.log(numSquarefulPerms([1, 1]))
console.log(numSquarefulPerms([2,2,2,2,2,2,2,2,2,2,2]))
console.log(numSquarefulPerms([0,0,0,0,0,0,1,1,1,1,1,1]))
console.log(numSquarefulPerms([0,0,0,1,1,1]))
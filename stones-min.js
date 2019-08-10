var mergeStones = function(stones, K) {
  let resArr = []

  function findMinArr (arr, k, count) {
      let length = arr.length
      // console.log(arr, k, count)
      if (length === 1) {
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~')
        // resArr.push(count)
        resArr.includes(count) ? '' : resArr.push(count)
      } else if (length < k) {
        return
      } else {
        for (let i = 0, length = arr.length - k + 1; i < length; i++) {
          let tmp = getSum(arr.slice(i, i + k)),
              tmpArr = arr.slice(),
              sum = count + tmp

          tmpArr.splice(i, k, tmp)
          // console.log('arr:' + arr.join())
          // console.log('k:' + k, 'sum:' + sum)
          // console.log('tmpArr:' + tmpArr.join())
          // console.log('------------------------------')
          findMinArr(tmpArr, k, sum)
      }
    }
  }
  
  function getSum () {
    // console.log('getSum:', arr.join())
    let hash = {}

    return function (arr) {
      let str = arr.join()
      // console.log(str)
      if (!hash[str]) {
        hash[str] = arr.reduce((total, cur) => {
          return total + cur
        }, 0)
      }

      return hash[str]
    }
  }
  
  getSum = getSum()
  findMinArr(stones, K, 0)
  // console.log(resArr)
  return resArr.length ? Math.min(...resArr) : -1
}

// let arr = [3, 5, 1, 2, 6]
// let arr = [6, 4, 4, 6]
// let arr = [3, 2, 4, 1]
let arr = [69,39,79,78,16,6,36,97,79,27,14,31,4]
// console.log(mergeStones([3, 2, 4, 1], 2))
// console.log(mergeStones([3, 2, 4, 1], 3))
console.log(mergeStones(arr, 2))
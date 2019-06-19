function mutil () {
  let cache = {}
  
  return function (s1, s2) {
      if (cache[s1]) {
          return cache[s1]
      } else {
          let nextAdd = 0
          let multiplier = +s1
          let res = []
          
          for (let length = s2.length - 1, i = length; i >= 0; i--) {
              let tmp = multiplier * parseInt(s2[i])
              
              if (nextAdd) {
                  tmp += nextAdd
              }
              
              nextAdd = Math.floor(tmp / 10)
              res.unshift(tmp % 10)
          }

          if (nextAdd) {
            res.unshift(nextAdd)
          }
          res = res.join('')
          cache[s1] = res
          
          return res
      }
  }
}

let fn = mutil()

// console.log(fn('123', '456'))

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 == 0 || num2 == 0) return '0'
  
  let length1 = num1.length,
      length2 = num2.length,
      nowIndex = 0,
      resArr = []
  
  function mutil () {
      let cache = {}
      
      return function (s1, s2) {
          if (cache[s1]) {
              return cache[s1]
          } else {
              let nextAdd = 0
              let multiplier = +s1
              let res = []
              
              for (let length = s2.length, i = length - 1; i >= 0; i--) {
                  let tmp = multiplier * parseInt(s2[i])
                  
                  if (nextAdd) {
                      tmp += nextAdd
                  }
                  
                  nextAdd = Math.floor(tmp / 10)
                  res.unshift(tmp % 10)
              }
              
              if (nextAdd) {
                  res.unshift(nextAdd)
              }

              res = res.join('')
              cache[s1] = res
              
              return res
          }
      }
  }

  mutil = mutil()
  
  function bigAdd (a, b) {
    let res = [],
        aLength = a.length - 1,
        bLength = b.length - 1,
        nextAdd = 0
    

    console.log(a, b)
    while (a[aLength] && b[bLength]) {
        let tmp = parseInt(a[aLength--]) + parseInt(b[bLength--]) + nextAdd
        nextAdd = Math.floor(tmp / 10)
        res.unshift((tmp % 10).toString())
    }
    
    while (a[aLength]) {
        let tmp = parseInt(a[aLength--]) + nextAdd
        nextAdd = Math.floor(tmp / 10)
        res.unshift(tmp % 10)
    }
    
    while (b[bLength]) {
        let tmp = parseInt(b[bLength--]) + nextAdd
        nextAdd = Math.floor(tmp / 10)
        res.unshift(tmp % 10)
    }

    if (nextAdd) {
        res.unshift(nextAdd)
    }
    
    console.log(res)
    return res.join('')
  }
  
  for (let i = length1 - 1; i >= 0; i--) {
      if (num1[i] === '0') {
          resArr.push('0')
      } else {
          let zeroNum = new Array(length1 - 1 - i).fill(0).join('')
          resArr.push(mutil(num1[i], num2) + zeroNum)
      }
  }

  console.log(resArr)
  let res = resArr.reduce((total, cur) => {
    total = bigAdd(total, cur)
    return total
  })
  
  return res
};

console.log(multiply('79362', '217'))
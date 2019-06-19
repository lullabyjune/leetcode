/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0,
      length = s.length
      
  const isSameBack = (function () {
      let cache = {}
      
      return function (str) {
          if (cache[str]) {
              return cache[str]
          }
          
          let head = 0,
              tail = str.length - 1
      
          while (head < tail) {
              if (str[head++] !== str[tail--]) {
                  cache[str] = false
                  return false
              }
          }
          
          cache[str] = true
          return true
      }
  })()
  
  for (let i = 0; i < length; i++) {
      let idx = i
      
      while (idx >= 0) {
          if (isSameBack(s.slice(idx--, i + 1))) {
              count++
          }
      }
  }
  
  return count
};

let str = 'aba'

console.log(countSubstrings(str))
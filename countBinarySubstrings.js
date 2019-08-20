/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let count = 0
  let hash = {
      '0': '1',
      '1': '0'
  }
  
  for (let i = 0, length = s.length - 1; i < length; i++) {
      let idx = s.indexOf(hash[s[i]], i + 1)
      
      if (idx > 0) {
          if (idx - i === 1) {
              count++
          } else {
              let lastIdx = s.indexOf(hash[s[idx]], idx)
              
              lastIdx = lastIdx === -1 ? length + 1 : lastIdx
              count += Math.min(lastIdx - idx, idx - i) === 0 ? 1 : Math.min(lastIdx - idx, idx - i)
              console.log(count)
              console.log(i, idx, lastIdx)
              console.log('str1:' + s.slice(i, idx))
              console.log('str2:' + s.slice(idx, lastIdx))
              i = idx - 1
          }
      } else {
          return count
      }
  }
  
  return count
};
let arr = "000111000"
console.log('res:' + countBinarySubstrings(arr))
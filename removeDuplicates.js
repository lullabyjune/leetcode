/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let str = S.split(''),
      index = 0
  
  while (str[index]) {
      if (str[index] === str[index + 1]) {
          str.splice(index, 2)
          
          if (index) {
              index--
          }
          
          continue
      }
      
      index++
  }
  
  return str.join('')
  
};

console.log(removeDuplicates('abbaca'))
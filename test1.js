/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let count = 0, res = [];
  
  function isPartition (str) {
      let length = str.length;
      if (length === 1) {
          return true;
      }
      
      let i = 0, j = length - 1;
      
      while (i < j) {
          if (str[i] != str[j]) {
              return false
          }
          i++;
          j--;
      }
      
      return true
  }
  
  function getStrArr (str, arr) {

      if (!str.length) {
        return;
      }

      if (isPartition(str)) {
          res.push(arr.concat([str]))
      }
      
      for (let i = 0, length = str.length; i < length; i++) {
          let tmpStr = str.slice(0, i + 1);
          if (isPartition(tmpStr)) {
              getStrArr(str.slice(i + 1), arr.concat([tmpStr]))
          }
      }
  }
  
//     for (let i = 0, length = s.length; i < length; i++) {
//         let tmpStr = s.slice(0, i + 1);
//         if (isPartition(tmpStr)) {
//             let str1 = s.slice(i + 1);
          
//             if (isPartition(str1)) {
//                 count++;
//                 res.push(tmpStr, str1)
//             }
          
//             for (let j = i; j < length; j++) {
//                 if ()
//             }
//         }
//     }    
  getStrArr(s, [])
  
  res.forEach(el => console.log(el))

  return res;
};

console.log(partition('aab'))
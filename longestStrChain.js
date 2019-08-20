/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  let count = [],
      wordsArr = {}
    
  function sorFn (a, b) {
      if (a.length > b.length) {
          return 1
      }
      
      if (a.length < b.length) {
          return -1
      }
      
      if (a > b) {
          return 1
      }
      
      return -1
  }
  
  function canAdd (total, cur) {
      for (let i = 0, length = total.length; i < length; i++) {
          if (total[i] === cur[i]) {
              continue
          } else {
              return total.slice(i + 1) === cur.slice(i)
          }
      }
  }
  
  function getCount (nowCount, nowStr) {
      let nextL = nowStr.length + 1,
          hasNext = false
      
      if (!wordsArr[nextL]) {
          count.push(nowCount)
          return
      }
      
      wordsArr[nextL].forEach(item => {
          if (canAdd(item, nowStr)) {
              console.log(item, nowCount)
              hasNext = true
              getCount(nowCount + 1, item)
          }
      })
      
      if (!hasNext) {

          count.push(nowCount)
      }
  }
  
  words.sort(sorFn)
  
  for (let i = 0, length = words.length; i < length; i++) {
      let l = words[i].length
      if (!wordsArr[l]) {
          wordsArr[l] = []
      }
      
      wordsArr[l].push(words[i])
  }
  
  // wordsArr[Object.keys(wordsArr)[0]].forEach(word => {
  //     getCount(1, word)
  // })
  Object.keys(wordsArr).forEach(key => {
    wordsArr[key].forEach(item => {
      getCount(1, item)
    })
  })
  
  return Math.max(...count)
};

console.log(longestStrChain(["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]))
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let length = s.length;
  if (length === 0)   return true;
  if (wordDict.indexOf(s) !== -1) return true;
  
  for (let i = 0; i < length; i++) {
      if (wordDict.indexOf(s.slice(0, i + 1)) !== -1) {
          let tmpS = s.slice(i + 1).replace(new RegExp(s.slice(0, i + 1), 'g'), '')
          let res = wordBreak(tmpS, wordDict)
          console.log(s.slice(0, i + 1), tmpS, res)
          if (res) {
              return true;
          }
      }
  }
  
  return false
};

let str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
let wordDict = ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"]

wordBreak(str, wordDict)
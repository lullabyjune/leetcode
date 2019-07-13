/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    //  执行用时 :76 ms, 在所有 JavaScript 提交中击败了99.05%的用户
    //  内存消耗 :35.3 MB, 在所有 JavaScript 提交中击败了71.74%的用户

    const getCharIndex = (char) => char.charCodeAt() - 97
    
    const countChar = (str) => {
        let charArr = new Array(26).fill(0)
        
        for (let char of str) {
            charArr[getCharIndex(char)]++
        }
        
        return charArr
    }
    
    let charCountS = countChar(s),
        charCountT = countChar(t)
    
    for (let i = 0, length = charCountT.length; i < length; i++) {
        if (charCountT[i] > charCountS[i])  return String.fromCharCode(97 + i)
    }
};